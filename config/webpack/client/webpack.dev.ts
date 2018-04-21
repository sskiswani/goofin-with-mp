import * as webpack from 'webpack';
import config from './webpack.base';

const devConfig: webpack.Configuration = {
  devtool: 'cheap-module-source-map',
  ...config,
  mode: 'development',
  plugins: [...config.plugins!, new webpack.HotModuleReplacementPlugin()]
};

export default devConfig;
