import { UserLoginDto } from 'src/types/apps/user'
import { AbstractDto } from 'src/types/common/abstract.dto'

export type UsersProps = {
  currentUser: UserLoginDto | null
}

export interface UserDto extends AbstractDto {
  firstName: string
  lastName: string
  email: string
}
