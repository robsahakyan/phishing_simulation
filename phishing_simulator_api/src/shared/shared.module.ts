import { HttpModule } from '@nestjs/axios';
import { Global, Logger, Module } from '@nestjs/common';
import { ApiConfigService } from './services/api-config.service';
import { MailService } from './services/mail.service';

const providers = [
  ApiConfigService,
  Logger,
  MailService,
];

@Global()
@Module({
  imports: [
    HttpModule,
  ],
  exports: [...providers, HttpModule],
  providers,
})
export class SharedModule {}
