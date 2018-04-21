import logger from '@common/logger';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../../config/webpack/client/webpack.dev';

const devPort = 6005;

export const hmrMiddleware = () => {
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, {
    publicPath: '/',
    clientLogLevel: 'info',
    hot: true
  });

  devServer.listen(devPort, () => {
    logger.debug('webpack-dev-server is listening on port', devPort);
  });
};
