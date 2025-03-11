import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { IAwsS3Config } from '../../modules/common/interfaces/IAwsS3Config';

@Injectable()
export class ApiConfigService {
  constructor(private readonly configService: ConfigService) {}

  private getNumber(key: string): number {
    return Number(this.configService.get(key));
  }

  private getString(key: string, defaultValue?: string): string {
    return this.configService
      .get(key, defaultValue)
      .toString()
      .replace(/\\n/g, '\n');
  }

  get appConfig() {
    return {
      port: this.getNumber('PORT'),
      domain: this.getString('DOMAIN'),
      frontendUrl: this.getString('FRONTEND_URL')
    };
  }

  get redisConfig() {
    return {
      host: this.getString('REDIS_HOST'),
      port: this.getNumber('REDIS_PORT'),
    };
  }

  get mongoDbConfig() {
    return {
      uri: this.getString('MONGO_DB_URI'),
    }
  }

  get bucketName() {
    return this.getString('BUCKET_NAME');
  }

  get jwtConfig() {
    return {
      secret: this.getString('JWT_SECRET_KEY'),
      accessTokenExpiry: this.getNumber('JWT_AUTH_EXPIRATION_TIME'),
      refreshTokenExpiry: this.getNumber('JWT_REFRESH_EXPIRATION_TIME'),
    };
  }

  get mailConfig() {
    return {
      transport: {
        service: this.getString('MAIL_SERVICE'),
        auth: {
          user: this.getString('MAIL_USER'),
          pass: this.getString('MAIL_PASSWORD'),
        },
      },
    };
  }

  get defoultMailFrom() {
    return this.getString('MAIL_FROM');
  }

}
