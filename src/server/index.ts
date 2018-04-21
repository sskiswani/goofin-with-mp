import pino from '@common/logger';
import { Server } from 'colyseus';
import express from 'express';
import expressLogger from 'express-pino-logger';
import { createServer } from 'http';
import { hmrMiddleware } from './middleware/HMRHandler';

console.info('it cant work', Server);
const isDev = process.env.NODE_ENV === 'development';
const appName = process.env.APP_NAME || 'ohgodohgod';
const appDist = process.env.APP_DIST || 'dist';
const PORT = Number.parseInt(process.env.APP_PORT || '3000', 10);

const app = express();
const gameServer = new Server({
  server: createServer(app)
});

if (isDev) {
  app.use(expressLogger());
  // .use(
  hmrMiddleware();
  // );
} else {
  app.use(express.static(appDist));
}

gameServer.listen(PORT, 'localhost', undefined, () => pino.info(Server, `[[${appName} @ http://localhost${PORT}]]`));
