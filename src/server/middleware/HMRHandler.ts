import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../../config/webpack/client/webpack.dev';

const DEV_PORT = 6005;

const compiler = webpack(config);
const devServer = new WebpackDevServer(compiler, {
  overlay: true,
  hot: true,
  stats: {
    colors: true
  }
});

devServer.listen(DEV_PORT, err => {
  if (err) {
    console.error(err);
  }

  console.info(`[webpack-dev-server] is listening on port http://localhost:${DEV_PORT}`);
});

console.info(`pls!`);
export const hmrMiddleware = () => {
  return devServer;
};
