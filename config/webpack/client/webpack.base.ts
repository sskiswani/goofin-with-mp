import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import * as webpack from 'webpack';
import env from '../env';
import paths from '../paths';

const config = {
  stats: 'minimal',
  target: 'web',
  entry: [paths.client],
  output: {
    pathinfo: true,
    // filename: 'static/js/bundle.js',
    // chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
  resolve: {
    modules: ['node_modules', paths.nodeModules],
    extensions: ['.mjs', '.web.ts', '.ts', '.web.tsx', '.tsx', '.web.js', '.js', '.json', '.web.jsx', '.jsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: paths.appTsConfig })]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
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
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'public/[name].[hash:8].[ext]'
            }
          },
          {
            test: /\.(ico|eot|otf|webp|ttf|woff|woff2)$/i,
            use: 'file-loader?limit=100000&name=assets/[name].[hash:6].[ext]'
          },
          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9' // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009'
                    })
                  ]
                }
              }
            ]
          },
          {
            test: [/\.vert$/, /\.frag$/],
            use: 'raw-loader'
          },
          {
            exclude: [/\.js?$/, /\.html$/, /\.json$/, /\.tsx?$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'public/[name].[hash:8].[ext]'
            }
          }
        ]
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
} as webpack.Configuration;

export default config;
