import logger from '@common/logger';
import { Client, Room } from 'colyseus';

export class SomeRoom extends Room<any> {
  public onInit(options: any) {
    console.log('BasicRoom created!', options);
  }

  public onJoin(client: Client, options: any) {
    const { id, sessionId } = client;
    logger.info('client has joined!', { id, sessionId, options });
    // this.state.messages.push(`${client.id} has arrived`);
    this.broadcast(`${client.sessionId} joined.`);
  }

  public onLeave(client: any) {
    this.broadcast(`${client.sessionId} left.`);
  }

  public onMessage(client: Client, data: any) {
    console.log('BasicRoom received message from', client.sessionId, ':', data);
    this.broadcast(`(${client.sessionId}) ${data.message}`);
  }

  public onDispose() {
    console.log('Dispose BasicRoom');
  }
}
