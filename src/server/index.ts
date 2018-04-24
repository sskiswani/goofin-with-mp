import pino from '@common/logger';
import { hmrMiddleware } from '@server/middleware/HMRHandler';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import { Server } from 'colyseus';
import { RoomConstructor } from 'colyseus/lib/Room';
import express from 'express';
import expressLogger from 'express-pino-logger';
import { createServer } from 'http';
import * as path from 'path';
import * as WebSocket from 'uws';
import { SomeRoom } from './ChatRoom';

const ChatRoom = SomeRoom as RoomConstructor;

// const isDev = true || process.env.NODE_ENV === 'development';
const appName = process.env.APP_NAME || 'ohgodohgod';
const appDist = process.env.APP_DIST || 'dist';
const PORT = Number.parseInt(process.env.APP_PORT || '3000', 10);

// Create HTTP & WebSocket servers
const app = express();
app.use(bodyParser.json());
app.use(expressLogger());
hmrMiddleware();

const assetDir = path.resolve(appDist, '../public');
app.use(express.static(appDist));
console.info(chalk.green`serving up ${assetDir}`);

const server = createServer(app);

const gameServer = new Server({
  engine: WebSocket.Server,
  server
});

// ChatRoom.onInit(options) will receive opts on joins
gameServer.register('chat', ChatRoom, {
  custom_options: 'you can use me on Room#onInit'
});

gameServer
  .register('chat', ChatRoom)
  .on('create', room => console.log(`[room ${room.roomId} created]`))
  .on('join', ({ roomId }, { sessionId }) => pino.trace(`client[${sessionId}] joined ${roomId}`))
  .on('leave', ({ roomId }, { sessionId }) => pino.trace(`client[${sessionId}] left ${roomId}`))
  .on('dispose', ({ roomId }) => console.log('handler: room disposed!', roomId));

// ~ run it
gameServer.listen(PORT, 'localhost', undefined, () => {
  pino.info(Server, `[${appName} http://localhost:${PORT}]`);
});
