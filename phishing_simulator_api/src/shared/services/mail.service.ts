import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { MailerService } from '@nestjs-modules/mailer';
import type { ISendMailOptions } from '@nestjs-modules/mailer/dist/interfaces/send-mail-options.interface';
import { ApiConfigService } from './api-config.service';

@Injectable()
export class MailService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mailerService: MailerService,
    private readonly configService: ApiConfigService,
  ) {}

  async send(mailData: ISendMailOptions): Promise<void> {
    mailData.from = mailData.from || this.configService.defoultMailFrom;

    await this.mailerService.sendMail(mailData);
  }

}
