import { realpathSync } from 'fs';
import { resolve } from 'path';

export const appPath = realpathSync(process.cwd());
const resolver = (relativePath: string) => resolve(appPath, relativePath);

const paths = {
  resolver,
  dist: resolver('dist'),
  nodeModules: resolver('node_modules'),
  htmlTemplate: resolver('public/index.html'),
  client: resolver('src/client'),
  server: resolver('src/server')
};

export default paths;
