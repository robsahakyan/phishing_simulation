import backendUrl from './backendUrl'

export default {
  meEndpoint: backendUrl + '/auth/me',
  loginEndpoint: backendUrl + '/auth/login',
  registerEndpoint: '/auth/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken',
  verifyEmail: backendUrl + '/auth/verify_email',
  verifyCode: backendUrl + '/auth/verify_code'
}
