import type { CanActivate, ExecutionContext } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

import { TokenTypeEnum } from '../constants/token-type.enum';
import { UserUnauthenticatedException } from '../modules/auth/exceptions/user-unauthenticated.exception';
import {JwtStrategy} from "../modules/auth/jwt.strategy";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtStrategy,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const authHeader = request?.headers?.authorization;

    if (!authHeader || !authHeader.includes('Bearer ')) {
      throw new UserUnauthenticatedException();
    }

    const token = (authHeader as string).slice(7);

    try {
      const user = this.jwtService.getPayload(token).user;

      request.user = user;
    } catch {
      throw new UserUnauthenticatedException();
    }

    return true;
  }
}
