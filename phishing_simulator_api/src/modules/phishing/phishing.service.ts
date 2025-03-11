import { PhishingStatusEnum } from './../../constants/phishing-status.enum';
import { ApiConfigService } from './../../shared/services/api-config.service';
import { MailService } from '../../shared/services/mail.service';
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PhishingAttempt } from './phishing-attempt.schema';
import { PhishingGateway } from './phishing.gateway';

@Injectable()
export class PhishingService {
  constructor(
    @InjectModel(PhishingAttempt.name) private phishingModel: Model<PhishingAttempt>,
    private readonly mailService: MailService,
    private readonly configService: ApiConfigService,
    private readonly phishingGateway: PhishingGateway
  ) {}

  async sendPhishingEmail(email: string): Promise<void> {
    const schemaWithTheEmail = await this.phishingModel.findOne({ email });

    if (schemaWithTheEmail) {
      throw new BadRequestException("This email you've already used")
    }
    const { domain, port } = this.configService.appConfig
    const encodedEmail = Buffer.from(email).toString('base64');

    const phishingLink = `${domain}:${port}/phishing/click/${encodedEmail}`;

    await this.mailService.send({
      to: email,
      subject: 'Important Security Alert',
      html: `<p>This is a phishing attempt. Click <a href="${phishingLink}">here</a> to update your account.</p>`,
    });

    const phishingAttempt = new this.phishingModel({
      email,
      status: PhishingStatusEnum.SENT,
      timestamp: new Date(),
      encodedToken: encodedEmail
    });

    await phishingAttempt.save();
    this.phishingGateway.notifyStatusChange();
  }

  async handleClick(email: string): Promise<void> {
    await this.phishingModel.updateOne({ email }, { status: PhishingStatusEnum.CLICKED });
  }

  async getAllPhishingAttempts(): Promise<PhishingAttempt[]> {
    return this.phishingModel.find();
  }

  async updateAttemptStatus(token: string, status: PhishingStatusEnum): Promise<void> {
    const phishingAttempt = await this.phishingModel.findOne({ encodedToken: token });
    if (!phishingAttempt) {
      throw new NotFoundException('Phishing attempt not found');
    }

    phishingAttempt.status = status;
    await phishingAttempt.save();
    this.phishingGateway.notifyStatusChange();
  }
}
