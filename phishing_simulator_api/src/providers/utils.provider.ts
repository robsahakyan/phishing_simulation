import { MessageTypeEnum, messages } from '../constants/message.enum';
import { compare, hashSync } from 'bcrypt';
import { isArray } from 'class-validator';
import { MessageDto } from '../modules/common/modules/shared/message.dto';
import { BadRequestException } from '@nestjs/common';

export class UtilsProvider {
  /**
   * convert entity to dto class instance
   * @param {{new(entity: E, options: any): T}} model
   * @param {E[] | E} entity
   * @param options
   * @returns {T[] | T}
   */
  public static toDto<T, E>(
    model: new (entity: E, options?: any) => T,
    entity: E,
    options?: Record<string, any>,
  ): T;

  public static toDto<T, E>(
    model: new (entity: E, options?: any) => T,
    entity: E[],
    options?: Record<string, any>,
  ): T[];

  public static toDto<T, E>(
    model: new (entity: E, options?: any) => T,
    entity: E | E[],
    options?: Record<string, any>,
  ): T | T[] {
    if (Array.isArray(entity)) {
      return entity.map((u) => new model(u, options));
    }

    return new model(entity, options);
  }

  static getMessageOverviewByType(messageEnum: MessageTypeEnum): MessageDto {
    return {
      messageType: messageEnum,
      message: messages[messageEnum]
    }
  }

  static getFileName(text: string) {
    const regexFileName = /([\s\w().:\\\-])+(.png|.jpeg|.jpg)$/; // add extensions for photo
    const fileName = text.match(regexFileName);

    return fileName[0];
  }

  static generateHash(password: string): string {
    return hashSync(password, 10);
  }

  static validateHash(password: string, hash: string): Promise<boolean> {
    if (!password || !hash) {
      return Promise.resolve(false);
    }

    return compare(password, hash);
  }

  static attachCountryCodeToPhoneNumber(phoneNumber: string, countryCode: string): string | null {
    if (!phoneNumber) {
      return null;
    }
    if (!phoneNumber.startsWith('+')) {
      return countryCode + phoneNumber;
    }
    return phoneNumber;
  }

  static separateCommasAndCreateAnArray(txt: string): string[] {
    let array = txt
    .split(',').map(el => el.trim());

    return array.filter(el => el);
  }

  static getRandomNum(): string {
    const random = Math.floor(Math.random() * 1000);

    return `${'0'.repeat(4 - random.toString().length)}${random}`;
  }

  static removeElemsFromObject(targetObject: Object, keys: string[]) {
    keys.forEach(key => {
      if (targetObject.hasOwnProperty(key)) {
        delete targetObject[key];
      }
    });

    return targetObject;
  }

  static isUUID(value: string | string[]): boolean {
    const uuidPattern = /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/i;

    if (Array.isArray(value)) {
      for (const item of value) {
        if (!uuidPattern.test(item)) {
          return false;
        }
      }

      return true;
    }

    return uuidPattern.test(value);
  }

  static replaceDotsWithCommasAndSpacesWithPercent(text: string) {
    return text.replace(/\./g, ',').replace(/ /g, '%');
  }

  static getIds(value) {
    let ids: string[] | undefined;

    if (value?.length) {
      ids = [];

      if (isArray(value)) {
        ids.push(...(value as string[]));
      } else {
        ids.push(...(JSON.parse(value as string)[0] as string[]));
      }
    }

    return ids;
  }

  static stringToArrayParser({ value }) {
    if (Array.isArray(value)) {
        return value;
    } else if (typeof value === 'string') {
        return [value];
    } else {
        throw new BadRequestException('Invalid data type');
    }
  }
  
}
