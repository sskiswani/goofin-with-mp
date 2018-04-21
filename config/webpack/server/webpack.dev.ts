import { Configuration } from 'webpack';

import config from './webpack.base';

export default {
  ...config,
  mode: 'development'
} as Configuration;
