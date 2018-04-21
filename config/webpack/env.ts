import packageInfo from '../../package.json';
import tsConfig from '../../tsconfig.json';

const env = {
  appName: packageInfo.name,
  appVersion: packageInfo.version,
  appPort: 3500,
  tsCompilerOptions: tsConfig.compilerOptions
};

export default env;
