import { UserLoginDto } from 'src/types/auth'

export type ErrCallbackType = (err: { [key: string]: string }) => void

export interface LoginParams {
  email: string
  password: string
}

export interface RegisterParams extends LoginParams {
  firstName: string
  lastName: string
}

export type AuthValuesType = {
  loading: boolean
  logout: (withoutRedirection?: boolean) => void
  user: UserLoginDto | null
  getToken: () => string | null
  setLoading: (value: boolean) => void
  setUser: (value: UserLoginDto | null) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
}