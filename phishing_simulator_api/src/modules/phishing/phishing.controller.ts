import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PhishingStatusEnum } from '../../constants/phishing-status.enum';
import { PhishingAttemptDto } from './dtoes/phishing-attempt.dto';
import { PhishingService } from './phishing.service';

@Controller('phishing')
export class PhishingController {
  constructor(private readonly phishingService: PhishingService) {}

  @Get('attempts')
  async getPhishingAttempts() {
    return this.phishingService.getAllPhishingAttempts();
  }

  @Post('send')
  async triggerPhishing(
    @Body() phishingAttemptDto: PhishingAttemptDto) {
    return this.phishingService.sendPhishingEmail(phishingAttemptDto.email);
  }

  @Get('click/:token')
  async handleClick(@Param('token') token: string) {
    await this.phishingService.updateAttemptStatus(token, PhishingStatusEnum.CLICKED);
    return { message: 'Phishing link clicked' };
  }
}
