import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class PhishingAttemptDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
