import { PhishingStatusEnum } from './../../constants/phishing-status.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PhishingAttempt extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  encodedToken: string;

  @Prop({ required: true,  })
  status: PhishingStatusEnum;

  @Prop({ required: true })
  timestamp: Date;
}

export const PhishingAttemptSchema = SchemaFactory.createForClass(PhishingAttempt);
