import { AxiosRequestConfig, HeadersDefaults, RawAxiosRequestHeaders } from 'axios'

export const declareBearerAuthHeader = (
  authToken?: string | null,
  params?: Record<string, any>,
  headerParams?: RawAxiosRequestHeaders,
  otherParams?: Omit<AxiosRequestConfig, 'headers' | 'params'>
): HeadersDefaults & any => {
  const headers: any = {}

  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`
  }
  
return {
    params,
    headers: { ...headers, ...headerParams },
    ...otherParams
  }
}