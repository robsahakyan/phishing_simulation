import { AbstractDto } from './common/abstract.dto';

export interface UserLoginDto extends AbstractDto {
    email: string;
    firstName: string;
    lastName: string;
    techPrimary: string;
    candidateId: string;
}