import type { CanActivate, ExecutionContext } from '@nestjs/common';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../modules/user/user.schema';
import { Model } from 'mongoose';
import { UserUnauthenticatedException } from '../modules/auth/exceptions/user-unauthenticated.exception';
import { JwtStrategy } from "../modules/auth/jwt.strategy";

@Injectable()
export class AuthWithoutRequiredUserGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtStrategy,
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const authHeader = request?.headers?.authorization;

    if (!authHeader || !authHeader.includes('Bearer ')) {
        request.user = null;
        
        return true;
    }

    const token = (authHeader as string).slice(7);

    try {
      const user = this.jwtService.getPayload(token).user;

      const userSchema = await this.userModel.find({ email: user.email });

      if (!userSchema) {
        throw new UnauthorizedException();
      }

      request.user = user;
    } catch {
      throw new UserUnauthenticatedException();
    }

    return true;
  }
}
