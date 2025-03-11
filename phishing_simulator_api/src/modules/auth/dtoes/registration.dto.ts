import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
} from 'class-validator';
import { LoginDto } from './login.dto';

export class RegistrationDto extends LoginDto{
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;
}
