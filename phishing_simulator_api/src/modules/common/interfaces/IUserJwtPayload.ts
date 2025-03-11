import { User } from '../../user/user.schema';
import type { TokenTypeEnum } from '../../../constants/token-type.enum';

export interface IUserJwtPayload {
  id: string;
  user: User;
  type: TokenTypeEnum;
}
