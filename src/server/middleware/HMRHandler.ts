import * as koaWebpackMiddleware from 'koa-webpack';
import config from '../../../config/webpack/client/webpack.dev';

export const hmrMiddleware = () =>
  koaWebpackMiddleware({
    config,
    dev: { publicPath: '/', logLevel: 'silent' },
    hot: { logLevel: 'silent' }
  } as koaWebpackMiddleware.Options);
