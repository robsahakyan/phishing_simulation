import backendUrl from './backendUrl'

function sendPhishingApprovement(token: string) {
  return backendUrl + '/phishing/click/' + token 
}

export default {
  getAllPhishingsEndpoint: backendUrl + '/phishing/attempts',
  sendPhishingEmailEndpoint: backendUrl + '/phishing/send',
  sendPhishingApprovement
}