import {BadRequestException, Injectable} from '@nestjs/common';
import {TokenTypeEnum} from '../../constants/token-type.enum';
import {UtilsProvider} from '../../providers/utils.provider';
import {UserService} from '../user/user.service';
import {ForgotPasswordDto} from './dtoes/forgot-password.dto';
import {LoginDto} from './dtoes/login.dto';
import {RegistrationDto} from './dtoes/registration.dto';
import {UserUnauthenticatedException} from './exceptions/user-unauthenticated.exception';
import {JwtStrategy} from './jwt.strategy';
import {ApiConfigService} from "../../shared/services/api-config.service";
import {MailService} from "../../shared/services/mail.service";
import {MessageTypeEnum} from "../../constants/message.enum";
import {TokenDto} from "./dtoes/token.dto";
import {Role} from "../../constants/role.enum";
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly userService: UserService,
    private readonly jwtService: JwtStrategy,
    private readonly configService: ApiConfigService,
    private readonly mailService: MailService,
  ) {}

  async login(userObj: User | LoginDto) {
    const userEntity: any =
      userObj instanceof LoginDto
        ? await this.validateUser(userObj)
        : userObj
    
    return this.jwtService.generateAccessPayload(userEntity);
  }

  async getMe(user: User) {
    return this.login(user);
  }

  async refreshToken(refreshTokenDto: TokenDto) {
    try {
      const user = this.jwtService.getPayload(refreshTokenDto.token).user;

      const userEntity = await this.userService.getEntityByEmail(user.email);

      return this.jwtService.generateAccessPayload(userEntity);
    } catch {
      throw new UserUnauthenticatedException();
    }
  }

  async registrationAndLogin(regDto: RegistrationDto, role: Role) {
    const regUser = await this.userService.create({
      ...regDto, 
      password: UtilsProvider.generateHash(regDto.password),
      role
    });

    const loginData = await this.login(regUser);

    return loginData;
  }

  async validateUser(userLoginDto: LoginDto) {
    const userEntity = await this.userService.getEntityByEmail(userLoginDto.email.toLowerCase());
    const isPasswordValid = await UtilsProvider.validateHash(
      userLoginDto.password,
      userEntity.password,
    );
    if (!isPasswordValid) {
      throw new UserUnauthenticatedException('password is an invalid');
    }

    return userEntity;
  }
}
