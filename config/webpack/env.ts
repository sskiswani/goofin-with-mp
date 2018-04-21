import * as fs from 'fs';
import * as path from 'path';
import paths from './paths';

// Make sure that including paths.js after env.js will read .env variables.
delete require.cache[require.resolve('./paths')];

const NODE_ENV = process.env.NODE_ENV;
// if (!NODE_ENV) { throw new Error('The NODE_ENV environment variable is required but was not specified.'); }

// https://github.com/bkeepers/ #what-other-env-files-can-i-use
const dotenvFiles = [
  `${paths.dotenv}.${NODE_ENV}.local`,
  `${paths.dotenv}.${NODE_ENV}`,
  // Don't include `.env.local` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  NODE_ENV !== 'test' && `${paths.dotenv}.local`,
  paths.dotenv
].filter(Boolean) as string[];

dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv').config({
      path: dotenvFile
    });
  }
});

const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || '')
  .split(path.delimiter)
  .filter(folder => folder && !path.isAbsolute(folder))
  .map(folder => path.resolve(appDirectory, folder))
  .join(path.delimiter);

function getClientEnvironment(publicUrl: string) {
  const raw = Object.keys(process.env).reduce(
    (envVar, key) => {
      envVar[key] = process.env[key];
      return envVar;
    },
    {
      // Useful for determining whether we’re running in production mode.
      // Most importantly, it switches React into the correct mode.
      NODE_ENV: process.env.NODE_ENV || 'development',
      // Useful for resolving the correct path to static assets in `public`.
      // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
      // This should only be used as an escape hatch. Normally you would put
      // images into the `src` and `import` them in code to get their paths.
      PUBLIC_URL: publicUrl
    }
  );
  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = {
    'process.env': Object.keys(raw).reduce((envVar, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {})
  };

  return { raw, stringified };
}

import packageInfo = require('../../package.json');
import tsConfig = require('../../tsconfig.json');

const { name, version } = packageInfo as any;
const compilerOptions = (tsConfig as any).compilerOptions;

const env = {
  appName: name,
  appVersion: version,
  appPort: 3500,
  tsCompilerOptions: compilerOptions,
  getClientEnvironment
};

export default env;
