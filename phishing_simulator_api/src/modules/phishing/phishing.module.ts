import { PhishingService } from './phishing.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhishingController } from './phishing.controller';
import { PhishingAttempt, PhishingAttemptSchema } from './phishing-attempt.schema';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { PhishingGateway } from './phishing.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PhishingAttempt.name, schema: PhishingAttemptSchema }]),
    UserModule,
    AuthModule, 
  ],
  providers: [PhishingGateway, PhishingService],
  controllers: [PhishingController],
})
export class PhishingModule {}
