export type PhishingProps = {
  phishingAttempts: PhishingListDto[]
}


export type PhishingListDto = {
  _id: string
  timestamp: Date;
  status: PhishingStatusEnum
  email: string
}

export enum PhishingStatusEnum {
  CLICKED = 'CLICKED',
  SENT = 'SENT'
} 