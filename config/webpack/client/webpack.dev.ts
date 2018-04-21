import * as autoprefixer from 'autoprefixer';
import * as webpack from 'webpack';
import config from './webpack.base';

const devConfig: webpack.Configuration = {
  ...config,
  mode: 'development',
  module: {
    rules: [
      ...config.module!.rules,
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                  flexbox: 'no-2009'
                })
              ],
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};

export default devConfig;
