import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import env from '../env';
import paths from '../paths';

const config: webpack.Configuration = {
  stats: 'minimal',
  target: 'web',
  entry: [paths.client],
  resolve: {
    // alias: {
    // '@actions': paths.resolve('src/client/actions'),
    // '@components': paths.resolve('src/client/components'),
    // '@containers': paths.resolve('src/client/containers'),
    // '@helpers': paths.resolve('src/client/helpers'),
    // '@reducers': paths.resolve('src/client/reducers'),
    // '@routes': paths.resolve('src/client/routes'),
    // '#lib': paths.resolve('src/lib')
    // },
    modules: ['node_modules', paths.nodeModules],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            silent: true,
            transpileOnly: true,
            compilerOptions: {
              ...env.tsCompilerOptions,
              target: 'es6',
              module: 'esnext'
            }
          }
        }
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        use: 'url-loader?limit=4096&name=assets/[name].[hash:6].[ext]'
      },
      {
        test: /\.(ico|eot|otf|webp|ttf|woff|woff2)$/i,
        use: 'file-loader?limit=100000&name=assets/[name].[hash:6].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.APP_NAME': JSON.stringify(env.appName),
      'process.env.APP_VERSION': JSON.stringify(env.appVersion)
    }),
    new HtmlWebpackPlugin({
      title: env.appName,
      template: paths.htmlTemplate,
      favicon: 'public/favicon.ico',
      minify: {
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        removeComments: true,
        useShortDoctype: true,
        keepClosingSlash: true,
        collapseWhitespace: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    })
  ]
};

export default config;
