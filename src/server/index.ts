import pino from '@common/logger';
import { hmrMiddleware } from '@server/middleware/HMRHandler';
import * as Koa from 'koa';
import * as koaLogger from 'koa-logger';
import * as koaServe from 'koa-static';

const isDev = process.env.NODE_ENV === 'development';
const appName = process.env.APP_NAME!;
const appVersion = process.env.APP_VERSION!;
const appDist = process.env.APP_DIST!;
const appPort = process.env.APP_PORT!;

const app = new Koa();

if (isDev) {
  app.use(koaLogger()).use(hmrMiddleware());
} else {
  app.use(koaServe(appDist));
}

app.listen(appPort, () => pino.info(`${appName} v${appVersion} [Port] ${appPort} [Mode] ${isDev ? '⚙️' : '🌎'}`));
