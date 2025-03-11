import authConfig from 'src/configs/auth';
import { UserLoginDto } from 'src/types/auth';
import { additionalFeePercentage } from "src/constants/staticInfo";
import backendUrl from 'src/configs/backendUrl';

const s3BasePath = process.env.NEXT_PUBLIC_S3_BASE_PATH;
const cdnS3Host = process.env.NEXT_PUBLIC_AWS_CDN_URL;

export class UtilsProvider {

  static decimalToFraction(decimal: number): string {
    const strDecimal = decimal.toString()
    const indexOf = strDecimal.indexOf('.')
    if (indexOf < 0) {
      return decimal.toString()
    }
    const decimalPlaces = strDecimal.length - indexOf - 1
    const denominator = Math.pow(10, decimalPlaces)
    const numerator = Number(strDecimal.slice(indexOf + 1))
    const gcd = this.findGCD(numerator, denominator)
    const simplifiedNumerator = numerator / gcd
    const simplifiedDenominator = denominator / gcd
    const mainNumberPart = strDecimal.slice(0, indexOf)

    return `${mainNumberPart} ${simplifiedNumerator}/${simplifiedDenominator}`
  }

  static fractionToDecimal(fractionStr: string): number {
    const [wholeNumber, fraction] = fractionStr.includes(' ') ? fractionStr.split(' ') : ['0', fractionStr];

    const [numerator, denominator] = fraction.split('/').map(Number);

    if (!denominator) {
      return numerator;
    }
    
    const decimalValue = Number(wholeNumber) + (numerator / denominator);

    return decimalValue;
}

  static verifyFileMimeType(fileType: string): boolean {
    const validMimeTypes = ['image/png', 'image/jpeg', 'image/gif']

    return validMimeTypes.find(el => fileType === el) ? true : false
  }

  static findGCD(a: number, b: number): number {
    return b ? this.findGCD(b, a % b) : a
  }

  static verifyDifferencesBetweenObjects<T, R>(initialObject: T & R, targetObject: T): boolean {
    let isDifferent = false
    for (const key in targetObject) {
      const targetValue = typeof initialObject[key] !== 'boolean' && !initialObject[key] ? '' : initialObject[key]
      if (targetValue !== String(targetObject[key]).trim()) {
        isDifferent = true
        break
      }
    }

    return isDifferent
  }

  static filterValidValues<T>(obj: T, elemsToRemove?: string[]): T {
    for (const key in obj) {
      const elemToRemove = elemsToRemove?.find(el => el === key)
      if (elemToRemove) {
        delete obj[key]
      } else if (typeof obj[key] !== 'boolean' && !obj[key]) {
        delete obj[key]
      }
    }
    
    return obj
  }

  static formatNumberWithCommas(number: number) {
    return number.toLocaleString('de-DE');
  }
  
  static getImageFullPath(imageKey: string, width: number, height: number) {
    return `${cdnS3Host}/${width}x${height}/${imageKey}`;
  }

  static convertToHumanReadableDate(isoDateString: Date) {
    const date = new Date(isoDateString);

    return date.toLocaleString();
  }

  static calculateMonthlyCost(price: number, monthlyDuration: number, initialPaymentPercentage: number) {
    const initialPaymentValue = (initialPaymentPercentage / 100) * price;
    const restPartOfValue = price - initialPaymentValue;
    const restPartOfValueWithFee = restPartOfValue + ((restPartOfValue * additionalFeePercentage) / 100); 
    const monthlyCost = restPartOfValueWithFee / monthlyDuration;

    return Math.ceil(monthlyCost);
  }

  static getFullNameOfUser(user: UserLoginDto) {
    return user.firstName + ' ' + user.lastName
  } 

  static getStoredToken(): string | null {
    if (window && typeof window !== 'undefined') {
      return window.localStorage.getItem(authConfig.storageTokenKeyName)
    }

    return null
  }

  static getFullPathOfS3Object(s3Uri: string): string {
    const s3Key = s3Uri.replace('s3://', '');

    return s3BasePath.replace(/\/+$/, '') + '/' + s3Key;
  }

  static getFullPathByPreSignedUrl(s3Uri: string): string {
    return backendUrl + `/s3/generate-presigned?s3Uri=${s3Uri}`
  }
}
