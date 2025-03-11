import {Body, Controller, Get, HttpCode, HttpStatus, Post, Put } from '@nestjs/common';
import { ApiTags} from '@nestjs/swagger';
import { Role } from '../../constants/role.enum';
import { AccessPayloadDto } from '../common/modules/auth/access-payload.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dtoes/login.dto';
import { RegistrationDto } from './dtoes/registration.dto';
import { MessageDto } from '../common/modules/shared/message.dto';
import { AuthUser } from '../../decorators/auth.decorator';
import { User } from '../user/user.schema';
import { AuthWithoutRequiredUser } from '../../decorators/http.decorator';

@Controller('/auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/me')
  @AuthWithoutRequiredUser()
  @HttpCode(HttpStatus.OK)
  async getMe(
    @AuthUser() user: User
  ): Promise<AccessPayloadDto> {
    return this.authService.getMe(user);
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto): Promise<AccessPayloadDto | MessageDto> {
    return this.authService.login(loginDto);
  }

  @Post('/registration')
  @HttpCode(HttpStatus.OK)
  async registration(@Body() regDto: RegistrationDto): Promise<AccessPayloadDto | MessageDto> {
    return (await this.authService.registrationAndLogin(regDto, Role.UNVERIFIED)) as AccessPayloadDto;
  }
}
