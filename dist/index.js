/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/webpack/client/webpack.base.ts":
/*!***********************************************!*\
  !*** ./config/webpack/client/webpack.base.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst autoprefixer_1 = __importDefault(__webpack_require__(/*! autoprefixer */ \"autoprefixer\"));\nconst html_webpack_plugin_1 = __importDefault(__webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\"));\nconst path = __importStar(__webpack_require__(/*! path */ \"path\"));\nconst tsconfig_paths_webpack_plugin_1 = __importDefault(__webpack_require__(/*! tsconfig-paths-webpack-plugin */ \"tsconfig-paths-webpack-plugin\"));\nconst webpack = __importStar(__webpack_require__(/*! webpack */ \"webpack\"));\nconst env_1 = __importDefault(__webpack_require__(/*! ../env */ \"./config/webpack/env.ts\"));\nconst paths_1 = __importDefault(__webpack_require__(/*! ../paths */ \"./config/webpack/paths.ts\"));\nconst config = {\n    stats: 'minimal',\n    target: 'web',\n    entry: [paths_1.default.client],\n    output: {\n        pathinfo: true,\n        // filename: 'static/js/bundle.js',\n        // chunkFilename: 'static/js/[name].chunk.js',\n        publicPath: '/',\n        devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\\\/g, '/')\n    },\n    resolve: {\n        modules: ['node_modules', paths_1.default.nodeModules],\n        extensions: ['.mjs', '.web.ts', '.ts', '.web.tsx', '.tsx', '.web.js', '.js', '.json', '.web.jsx', '.jsx'],\n        plugins: [new tsconfig_paths_webpack_plugin_1.default({ configFile: paths_1.default.appTsConfig })]\n    },\n    module: {\n        rules: [\n            {\n                test: /\\.tsx?$/,\n                use: {\n                    loader: 'ts-loader',\n                    options: {\n                        transpileOnly: true,\n                        compilerOptions: {\n                            ...env_1.default.tsCompilerOptions,\n                            target: 'es6',\n                            module: 'esnext'\n                        }\n                    }\n                }\n            },\n            {\n                oneOf: [\n                    {\n                        test: [/\\.bmp$/, /\\.gif$/, /\\.jpe?g$/, /\\.png$/],\n                        loader: /*require.resolve*/(/*! url-loader */ \"url-loader\"),\n                        options: {\n                            limit: 10000,\n                            name: 'public/[name].[hash:8].[ext]'\n                        }\n                    },\n                    {\n                        test: /\\.(ico|eot|otf|webp|ttf|woff|woff2)$/i,\n                        use: 'file-loader?limit=100000&name=assets/[name].[hash:6].[ext]'\n                    },\n                    {\n                        test: /\\.css$/,\n                        use: [\n                            /*require.resolve*/(/*! style-loader */ \"style-loader\"),\n                            {\n                                loader: /*require.resolve*/(/*! css-loader */ \"css-loader\"),\n                                options: {\n                                    importLoaders: 1\n                                }\n                            },\n                            {\n                                loader: /*require.resolve*/(/*! postcss-loader */ \"postcss-loader\"),\n                                options: {\n                                    // Necessary for external CSS imports to work\n                                    // https://github.com/facebookincubator/create-react-app/issues/2677\n                                    ident: 'postcss',\n                                    plugins: () => [\n                                        __webpack_require__(/*! postcss-flexbugs-fixes */ \"postcss-flexbugs-fixes\"),\n                                        autoprefixer_1.default({\n                                            browsers: [\n                                                '>1%',\n                                                'last 4 versions',\n                                                'Firefox ESR',\n                                                'not ie < 9' // React doesn't support IE8 anyway\n                                            ],\n                                            flexbox: 'no-2009'\n                                        })\n                                    ]\n                                }\n                            }\n                        ]\n                    },\n                    {\n                        test: [/\\.vert$/, /\\.frag$/],\n                        use: 'raw-loader'\n                    },\n                    {\n                        exclude: [/\\.js?$/, /\\.html$/, /\\.json$/, /\\.tsx?$/],\n                        loader: /*require.resolve*/(/*! file-loader */ \"file-loader\"),\n                        options: {\n                            name: 'public/[name].[hash:8].[ext]'\n                        }\n                    }\n                ]\n            }\n        ]\n    },\n    plugins: [\n        new webpack.DefinePlugin({\n            'process.env.APP_NAME': JSON.stringify(env_1.default.appName),\n            'process.env.APP_VERSION': JSON.stringify(env_1.default.appVersion)\n        }),\n        new html_webpack_plugin_1.default({\n            title: env_1.default.appName,\n            template: paths_1.default.htmlTemplate,\n            favicon: 'public/favicon.ico',\n            minify: {\n                minifyJS: true,\n                minifyCSS: true,\n                minifyURLs: true,\n                removeComments: true,\n                useShortDoctype: true,\n                keepClosingSlash: true,\n                collapseWhitespace: true,\n                removeEmptyAttributes: true,\n                removeRedundantAttributes: true,\n                removeStyleLinkTypeAttributes: true\n            }\n        })\n    ]\n};\nexports.default = config;\n\n\n//# sourceURL=webpack:///./config/webpack/client/webpack.base.ts?");

/***/ }),

/***/ "./config/webpack/client/webpack.dev.ts":
/*!**********************************************!*\
  !*** ./config/webpack/client/webpack.dev.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst webpack = __importStar(__webpack_require__(/*! webpack */ \"webpack\"));\nconst webpack_base_1 = __importDefault(__webpack_require__(/*! ./webpack.base */ \"./config/webpack/client/webpack.base.ts\"));\nconst devConfig = {\n    devtool: 'cheap-module-source-map',\n    ...webpack_base_1.default,\n    mode: 'development',\n    plugins: [...webpack_base_1.default.plugins, new webpack.HotModuleReplacementPlugin()]\n};\nexports.default = devConfig;\n\n\n//# sourceURL=webpack:///./config/webpack/client/webpack.dev.ts?");

/***/ }),

/***/ "./config/webpack/env.ts":
/*!*******************************!*\
  !*** ./config/webpack/env.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst fs = __importStar(__webpack_require__(/*! fs */ \"fs\"));\nconst path = __importStar(__webpack_require__(/*! path */ \"path\"));\nconst paths_1 = __importDefault(__webpack_require__(/*! ./paths */ \"./config/webpack/paths.ts\"));\n// Make sure that including paths.js after env.js will read .env variables.\ndelete __webpack_require__.c[/*require.resolve*/(/*! ./paths */ \"./config/webpack/paths.ts\")];\nconst NODE_ENV = \"development\";\n// if (!NODE_ENV) { throw new Error('The NODE_ENV environment variable is required but was not specified.'); }\n// https://github.com/bkeepers/ #what-other-env-files-can-i-use\nconst dotenvFiles = [\n    `${paths_1.default.dotenv}.${NODE_ENV}.local`,\n    `${paths_1.default.dotenv}.${NODE_ENV}`,\n    // Don't include `.env.local` for `test` environment\n    // since normally you expect tests to produce the same\n    // results for everyone\n    NODE_ENV !== 'test' && `${paths_1.default.dotenv}.local`,\n    paths_1.default.dotenv\n].filter(Boolean);\ndotenvFiles.forEach(dotenvFile => {\n    if (fs.existsSync(dotenvFile)) {\n        __webpack_require__(/*! dotenv */ \"dotenv\").config({\n            path: dotenvFile\n        });\n    }\n});\nconst appDirectory = fs.realpathSync(process.cwd());\nprocess.env.NODE_PATH = (process.env.NODE_PATH || '')\n    .split(path.delimiter)\n    .filter(folder => folder && !path.isAbsolute(folder))\n    .map(folder => path.resolve(appDirectory, folder))\n    .join(path.delimiter);\nfunction getClientEnvironment(publicUrl) {\n    const raw = Object.keys(process.env).reduce((envVar, key) => {\n        envVar[key] = process.env[key];\n        return envVar;\n    }, {\n        // Useful for determining whether we’re running in production mode.\n        // Most importantly, it switches React into the correct mode.\n        NODE_ENV: \"development\" || 'development',\n        // Useful for resolving the correct path to static assets in `public`.\n        // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.\n        // This should only be used as an escape hatch. Normally you would put\n        // images into the `src` and `import` them in code to get their paths.\n        PUBLIC_URL: publicUrl\n    });\n    // Stringify all values so we can feed into Webpack DefinePlugin\n    const stringified = {\n        'process.env': Object.keys(raw).reduce((envVar, key) => {\n            env[key] = JSON.stringify(raw[key]);\n            return env;\n        }, {})\n    };\n    return { raw, stringified };\n}\nconst packageInfo = __webpack_require__(/*! ../../package.json */ \"./package.json\");\nconst tsConfig = __webpack_require__(/*! ../../tsconfig.json */ \"./tsconfig.json\");\nconst { name, version } = packageInfo;\nconst compilerOptions = tsConfig.compilerOptions;\nconst env = {\n    appName: name,\n    appVersion: version,\n    appPort: 3500,\n    tsCompilerOptions: compilerOptions,\n    getClientEnvironment\n};\nexports.default = env;\n\n\n//# sourceURL=webpack:///./config/webpack/env.ts?");

/***/ }),

/***/ "./config/webpack/paths.ts":
/*!*********************************!*\
  !*** ./config/webpack/paths.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst fs = __importStar(__webpack_require__(/*! fs */ \"fs\"));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst url = __importStar(__webpack_require__(/*! url */ \"url\"));\nconst appDirectory = fs.realpathSync(process.cwd());\nconst resolveApp = relativePath => path_1.resolve(appDirectory, relativePath);\nconst envPublicUrl = process.env.PUBLIC_URL;\nfunction ensureSlash(path, needsSlash) {\n    const hasSlash = path.endsWith('/');\n    if (hasSlash && !needsSlash) {\n        return path.substr(path, path.length - 1);\n    }\n    else if (!hasSlash && needsSlash) {\n        return `${path}/`;\n    }\n    else {\n        return path;\n    }\n}\nconst getPublicUrl = appPackageJson => envPublicUrl || '/';\nfunction getServedPath(appPackageJson) {\n    const publicUrl = getPublicUrl(appPackageJson);\n    const servedUrl = envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');\n    return ensureSlash(servedUrl, true);\n}\nconst paths = {\n    dotenv: resolveApp('.env'),\n    appPackageJson: resolveApp('package.json'),\n    appNodeModules: resolveApp('node_modules'),\n    appTsConfig: resolveApp('tsconfig.json'),\n    appTsLint: resolveApp('tslint.json'),\n    nodeModules: resolveApp('node_modules'),\n    htmlTemplate: resolveApp('public/index.html'),\n    publicUrl: getPublicUrl(resolveApp('package.json')),\n    servedPath: getServedPath(resolveApp('package.json')),\n    client: resolveApp('src/client'),\n    server: resolveApp('src/server'),\n    dist: resolveApp('dist'),\n    appPublic: resolveApp('public')\n};\nexports.default = paths;\n\n\n//# sourceURL=webpack:///./config/webpack/paths.ts?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, license, version, homepage, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"ohgodohgod\",\"license\":\"CC0-1.0\",\"version\":\"0.1.0\",\"homepage\":\"https://github.com/sskiswani/ohgodohgod\",\"scripts\":{\"clean\":\"rimraf dist/*\",\"serve\":\"node dist/index.js\",\"start\":\"webpack --config config/webpack/server/webpack.dev.ts && node dist/index.js\",\"build\":\"yarn clean && yarn build:server && yarn build:client\",\"build:server\":\"webpack --config config/webpack/server/webpack.prod.ts\",\"build:client\":\"webpack --config config/webpack/client/webpack.prod.ts\"},\"dependencies\":{\"@types/dotenv\":\"^4.0.3\",\"@types/express\":\"^4.11.1\",\"@types/socket.io\":\"^1.4.33\",\"aframe\":\"^0.8.2\",\"aframe-cubemap-component\":\"^0.1.3\",\"autoprefixer\":\"^8.3.0\",\"babel-cli\":\"^6.26.0\",\"babel-core\":\"^6.26.0\",\"babel-loader\":\"^7.1.4\",\"babel-plugin-module-resolver\":\"^3.1.1\",\"babel-preset-es2015\":\"^6.24.1\",\"chalk\":\"^2.4.0\",\"classnames\":\"^2.2.5\",\"colyseus\":\"^0.9.5\",\"colyseus.js\":\"^0.9.1\",\"dotenv\":\"^5.0.1\",\"express\":\"^4.16.3\",\"express-pino-logger\":\"^3.0.1\",\"history\":\"^4.7.2\",\"immutable\":\"^3.8.2\",\"isomorphic-fetch\":\"^2.2.1\",\"koa\":\"^2.5.0\",\"koa-compose\":\"^4.0.0\",\"koa-logger\":\"^3.2.0\",\"koa-static\":\"^4.0.2\",\"koa-webpack\":\"^3.0.2\",\"lodash\":\"^4.17.5\",\"lodash-decorators\":\"^5.0.0\",\"pino\":\"^4.16.1\",\"polished\":\"^1.9.2\",\"postcss-flexbugs-fixes\":\"^3.3.0\",\"query-string\":\"^6.0.0\",\"react\":\"^16.3.2\",\"react-dev-utils\":\"^5.0.1\",\"react-dom\":\"^16.3.2\",\"react-helmet\":\"^5.2.0\",\"react-hot-loader\":\"^4.1.1\",\"react-redux\":\"^5.0.7\",\"react-router\":\"^4.2.0\",\"react-router-dom\":\"^4.2.2\",\"redux\":\"^4.0.0\",\"redux-thunk\":\"^2.2.0\",\"rxjs\":\"^5.5.10\",\"socket.io\":\"^2.1.0\",\"source-map-support\":\"^0.5.4\",\"styled-components\":\"^3.2.6\",\"uws\":\"^9.147.0\",\"webpack-dev-server\":\"^3.1.3\"},\"devDependencies\":{\"@types/aframe\":\"^0.7.1\",\"@types/autoprefixer\":\"^6.7.3\",\"@types/extract-text-webpack-plugin\":\"^3.0.2\",\"@types/html-webpack-plugin\":\"^2.30.3\",\"@types/koa-logger\":\"^3.1.0\",\"@types/koa-static\":\"^4.0.0\",\"@types/koa-webpack\":\"^1.0.1\",\"@types/lodash\":\"^4.14.107\",\"@types/node\":\"^9.6.6\",\"@types/pino\":\"^4.7.1\",\"@types/react\":\"^16.3.12\",\"@types/react-dom\":\"^16.0.5\",\"@types/react-helmet\":\"^5.0.5\",\"@types/react-router-dom\":\"^4.2.6\",\"@types/redux-devtools\":\"^3.0.43\",\"@types/redux-devtools-dock-monitor\":\"^1.1.32\",\"@types/redux-devtools-log-monitor\":\"^1.0.33\",\"@types/webpack\":\"^4.1.3\",\"@types/webpack-dev-server\":\"^2.9.4\",\"@types/webpack-node-externals\":\"^1.6.3\",\"add\":\"^2.0.6\",\"css-loader\":\"^0.28.11\",\"file-loader\":\"^1.1.11\",\"fork-ts-checker-webpack-plugin\":\"^0.4.1\",\"html-webpack-plugin\":\"^3.2.0\",\"postcss-loader\":\"^2.1.4\",\"prettier\":\"^1.12.1\",\"raw-loader\":\"^0.5.1\",\"redux-devtools\":\"^3.4.1\",\"redux-devtools-chart-monitor\":\"^1.7.0\",\"redux-devtools-dock-monitor\":\"^1.1.3\",\"redux-devtools-extension\":\"^2.13.2\",\"redux-devtools-log-monitor\":\"^1.4.0\",\"redux-devtools-multiple-monitors\":\"^1.0.1\",\"source-map-loader\":\"^0.2.3\",\"style-loader\":\"^0.21.0\",\"ts-loader\":\"^4.2.0\",\"ts-node\":\"^6.0.0\",\"tsconfig-paths\":\"^3.3.1\",\"tsconfig-paths-webpack-plugin\":\"^3.0.4\",\"tslint\":\"^5.9.1\",\"tslint-config-prettier\":\"^1.12.0\",\"tslint-react\":\"^3.5.1\",\"typescript\":\"^2.8.3\",\"url-loader\":\"^1.0.1\",\"webpack\":\"^4.6.0\",\"webpack-cli\":\"^2.0.15\",\"webpack-node-externals\":\"^1.7.2\"}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/common/logger.ts":
/*!******************************!*\
  !*** ./src/common/logger.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst chalk_1 = __importDefault(__webpack_require__(/*! chalk */ \"chalk\"));\nconst pino_1 = __importDefault(__webpack_require__(/*! pino */ \"pino\"));\nvar LogLevel;\n(function (LogLevel) {\n    LogLevel[LogLevel[\"DEBUG\"] = 20] = \"DEBUG\";\n    LogLevel[LogLevel[\"INFO\"] = 30] = \"INFO\";\n    LogLevel[LogLevel[\"WARN\"] = 40] = \"WARN\";\n    LogLevel[LogLevel[\"ERROR\"] = 50] = \"ERROR\";\n    LogLevel[LogLevel[\"USERLVL\"] = 100] = \"USERLVL\";\n})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));\nexports.ColorMap = {\n    [LogLevel.DEBUG]: chalk_1.default.blue,\n    [LogLevel.INFO]: chalk_1.default.green,\n    [LogLevel.WARN]: chalk_1.default.yellow,\n    [LogLevel.ERROR]: chalk_1.default.red,\n    [LogLevel.USERLVL]: chalk_1.default.white\n};\nconst mapLevelToColor = (value) => {\n    if (value <= LogLevel.DEBUG) {\n        return exports.ColorMap[LogLevel.DEBUG];\n    }\n    if (value <= LogLevel.INFO) {\n        return exports.ColorMap[LogLevel.INFO];\n    }\n    if (value <= LogLevel.WARN) {\n        return exports.ColorMap[LogLevel.WARN];\n    }\n    if (value <= LogLevel.ERROR) {\n        return exports.ColorMap[LogLevel.ERROR];\n    }\n    return exports.ColorMap[LogLevel.USERLVL];\n};\nexports.createLogger = (prettyPrint = true) => {\n    if (!pino_1.default.pretty) {\n        return pino_1.default({ prettyPrint });\n    }\n    const pretty = pino_1.default.pretty({\n        formatter: ({ pid, hostname, name, level, time, v, ...value }) => {\n            let line = `[${new Date(time).toLocaleString()}] ${mapLevelToColor(level)}: `;\n            if (value.type === 'Error') {\n                line += `\\n${chalk_1.default.bgRed(value.stack)}`;\n            }\n            else if (value.msg) {\n                line += chalk_1.default.cyan(value.msg);\n            }\n            else {\n                line += `\\n${chalk_1.default.magentaBright(JSON.stringify(value, null, 2))}`;\n            }\n            return line;\n        }\n    });\n    pretty.pipe(process.stdout);\n    return pino_1.default({}, pretty);\n};\nconst logger = exports.createLogger(true);\nexports.default = logger;\n\n\n//# sourceURL=webpack:///./src/common/logger.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst logger_1 = __importDefault(__webpack_require__(/*! @common/logger */ \"./src/common/logger.ts\"));\nconst colyseus_1 = __webpack_require__(/*! colyseus */ \"colyseus\");\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst express_pino_logger_1 = __importDefault(__webpack_require__(/*! express-pino-logger */ \"express-pino-logger\"));\nconst http_1 = __webpack_require__(/*! http */ \"http\");\nconst HMRHandler_1 = __webpack_require__(/*! ./middleware/HMRHandler */ \"./src/server/middleware/HMRHandler.ts\");\nconsole.info('it cant work', colyseus_1.Server);\nconst isDev = \"development\" === 'development';\nconst appName = \"ohgodohgod\" || 'ohgodohgod';\nconst appDist = \"/mnt/d/twerkspace/ld41/ohgodohgod/dist\" || 'dist';\nconst PORT = Number.parseInt(3500 || '3000', 10);\nconst app = express_1.default();\nconst gameServer = new colyseus_1.Server({\n    server: http_1.createServer(app)\n});\nif (isDev) {\n    app.use(express_pino_logger_1.default());\n    // .use(\n    HMRHandler_1.hmrMiddleware();\n    // );\n}\nelse {\n    app.use(express_1.default.static(appDist));\n}\ngameServer.listen(PORT, 'localhost', undefined, () => logger_1.default.info(colyseus_1.Server, `[[${appName} @ http://localhost${PORT}]]`));\n\n\n//# sourceURL=webpack:///./src/server/index.ts?");

/***/ }),

/***/ "./src/server/middleware/HMRHandler.ts":
/*!*********************************************!*\
  !*** ./src/server/middleware/HMRHandler.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst logger_1 = __importDefault(__webpack_require__(/*! @common/logger */ \"./src/common/logger.ts\"));\nconst webpack_1 = __importDefault(__webpack_require__(/*! webpack */ \"webpack\"));\nconst webpack_dev_server_1 = __importDefault(__webpack_require__(/*! webpack-dev-server */ \"webpack-dev-server\"));\nconst webpack_dev_1 = __importDefault(__webpack_require__(/*! ../../../config/webpack/client/webpack.dev */ \"./config/webpack/client/webpack.dev.ts\"));\nconst devPort = 6005;\nexports.hmrMiddleware = () => {\n    const compiler = webpack_1.default(webpack_dev_1.default);\n    const devServer = new webpack_dev_server_1.default(compiler, {\n        publicPath: '/',\n        clientLogLevel: 'info',\n        hot: true\n    });\n    devServer.listen(devPort, () => {\n        logger_1.default.debug('webpack-dev-server is listening on port', devPort);\n    });\n};\n\n\n//# sourceURL=webpack:///./src/server/middleware/HMRHandler.ts?");

/***/ }),

/***/ "./tsconfig.json":
/*!***********************!*\
  !*** ./tsconfig.json ***!
  \***********************/
/*! exports provided: compilerOptions, default */
/***/ (function(module) {

eval("module.exports = {\"compilerOptions\":{\"target\":\"esnext\",\"module\":\"commonjs\",\"moduleResolution\":\"node\",\"jsx\":\"react\",\"experimentalDecorators\":true,\"forceConsistentCasingInFileNames\":true,\"strict\":true,\"esModuleInterop\":true,\"allowSyntheticDefaultImports\":true,\"noImplicitAny\":false,\"noImplicitReturns\":true,\"noImplicitThis\":true,\"noUnusedLocals\":true,\"skipLibCheck\":true,\"sourceMap\":true,\"strictNullChecks\":true,\"baseUrl\":\"src\",\"outDir\":\"dist\",\"paths\":{\"@server/*\":[\"*\",\"server/*\"],\"@client/*\":[\"*\",\"client/*\"],\"@common/*\":[\"*\",\"common/*\"],\"lib/*\":[\"*\",\"lib/*\"]},\"plugins\":[{\"name\":\"typescript-styled-plugin\"}]}};\n\n//# sourceURL=webpack:///./tsconfig.json?");

/***/ }),

/***/ "autoprefixer":
/*!*******************************!*\
  !*** external "autoprefixer" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"autoprefixer\");\n\n//# sourceURL=webpack:///external_%22autoprefixer%22?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack:///external_%22chalk%22?");

/***/ }),

/***/ "colyseus":
/*!***************************!*\
  !*** external "colyseus" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"colyseus\");\n\n//# sourceURL=webpack:///external_%22colyseus%22?");

/***/ }),

/***/ "css-loader":
/*!*****************************!*\
  !*** external "css-loader" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"css-loader\");\n\n//# sourceURL=webpack:///external_%22css-loader%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-pino-logger":
/*!**************************************!*\
  !*** external "express-pino-logger" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-pino-logger\");\n\n//# sourceURL=webpack:///external_%22express-pino-logger%22?");

/***/ }),

/***/ "file-loader":
/*!******************************!*\
  !*** external "file-loader" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"file-loader\");\n\n//# sourceURL=webpack:///external_%22file-loader%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "pino":
/*!***********************!*\
  !*** external "pino" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pino\");\n\n//# sourceURL=webpack:///external_%22pino%22?");

/***/ }),

/***/ "postcss-flexbugs-fixes":
/*!*****************************************!*\
  !*** external "postcss-flexbugs-fixes" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"postcss-flexbugs-fixes\");\n\n//# sourceURL=webpack:///external_%22postcss-flexbugs-fixes%22?");

/***/ }),

/***/ "postcss-loader":
/*!*********************************!*\
  !*** external "postcss-loader" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"postcss-loader\");\n\n//# sourceURL=webpack:///external_%22postcss-loader%22?");

/***/ }),

/***/ "style-loader":
/*!*******************************!*\
  !*** external "style-loader" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"style-loader\");\n\n//# sourceURL=webpack:///external_%22style-loader%22?");

/***/ }),

/***/ "tsconfig-paths-webpack-plugin":
/*!************************************************!*\
  !*** external "tsconfig-paths-webpack-plugin" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tsconfig-paths-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22tsconfig-paths-webpack-plugin%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ }),

/***/ "url-loader":
/*!*****************************!*\
  !*** external "url-loader" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url-loader\");\n\n//# sourceURL=webpack:///external_%22url-loader%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-server":
/*!*************************************!*\
  !*** external "webpack-dev-server" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-server\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-server%22?");

/***/ })

/******/ });