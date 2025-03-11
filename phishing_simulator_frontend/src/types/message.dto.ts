import { MessageTypeEnum } from './enums/message.enum'

export class MessageDto {
  message: string
  messageType: MessageTypeEnum

  constructor(messageDto: MessageDto) {
    this.message = messageDto.message
    this.messageType = messageDto.messageType
  }
}
