import * as fs from 'fs';
import { resolve } from 'path';
import * as url from 'url';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;
function ensureSlash(path: any, needsSlash: boolean) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}

const getPublicUrl = appPackageJson => envPublicUrl || '/';

function getServedPath(appPackageJson: string) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl = envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

const paths = {
  dotenv: resolveApp('.env'),
  appPackageJson: resolveApp('package.json'),
  appNodeModules: resolveApp('node_modules'),
  appTsConfig: resolveApp('tsconfig.json'),
  appTsLint: resolveApp('tslint.json'),
  nodeModules: resolveApp('node_modules'),
  htmlTemplate: resolveApp('public/index.html'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),
  client: resolveApp('src/client'),
  server: resolveApp('src/server'),
  dist: resolveApp('dist'),
  appPublic: resolveApp('public')
};

export default paths;
