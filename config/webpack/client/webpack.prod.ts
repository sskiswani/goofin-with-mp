import * as autoprefixer from 'autoprefixer';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as webpack from 'webpack';
import paths from '../paths';
import config from './webpack.base';

const prodConfig = {
  ...config,
  mode: 'production',
  output: {
    path: paths.dist,
    filename: '[name].js'
  },
  module: {
    rules: [
      ...config.module!.rules,
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                    flexbox: 'no-2009'
                  })
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    ...config.plugins!,
    new webpack.ProgressPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[hash:6].css',
      allChunks: true
    })
  ]
} as webpack.Configuration;

export default prodConfig;
