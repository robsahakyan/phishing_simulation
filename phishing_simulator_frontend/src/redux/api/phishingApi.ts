import axios from 'axios'
import phishingEndpoints from 'src/configs/phishing'
import { declareBearerAuthHeader } from './common'

const getAllPhishingsApi = (authToken: string) => {
  return axios.get(phishingEndpoints.getAllPhishingsEndpoint, declareBearerAuthHeader(authToken))
}

const sendPhishingEmailApi = (authToken: string, email: string) => {
  return axios.post(phishingEndpoints.sendPhishingEmailEndpoint, { email }, declareBearerAuthHeader(authToken))
}

const sendPhishingApprovementApi = (token: string) => {
  return axios.post(phishingEndpoints.sendPhishingApprovement(token),  null)
}

export default {
  getAllPhishingsApi,
  sendPhishingEmailApi,
  sendPhishingApprovementApi
}
