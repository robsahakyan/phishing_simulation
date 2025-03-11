import { InjectModel } from '@nestjs/mongoose';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Model } from 'mongoose';
import { Server } from 'socket.io';
import { PhishingAttempt } from './phishing-attempt.schema';

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})
export class PhishingGateway {
  @WebSocketServer() server: Server;

  constructor(
    @InjectModel(PhishingAttempt.name) private phishingModel: Model<PhishingAttempt>,
  ) {}

  async notifyStatusChange() {
    try {
      const attempts = await this.phishingModel.find();
      this.server.emit('phishingAttemptsUpdated', attempts); 
    } catch (error) {
      console.error('Error notifying status change:', error);
    }
  }
}
