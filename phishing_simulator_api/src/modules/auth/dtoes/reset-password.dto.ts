import { ApiProperty } from '@nestjs/swagger';
import {   IsString, MaxLength, MinLength } from 'class-validator';
import {TokenDto} from "./token.dto";

export class ResetPasswordDto extends TokenDto {
  @ApiProperty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  newPassword: string;
}