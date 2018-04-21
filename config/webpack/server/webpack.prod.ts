import * as webpack from 'webpack';
import config from './webpack.base';

export default {
  ...config,
  mode: 'production',
  plugins: [...config.plugins!, new webpack.ProgressPlugin()]
} as webpack.Configuration;
