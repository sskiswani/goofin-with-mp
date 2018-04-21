declare module 'tsconfig-paths-webpack-plugin';
declare module 'express-pino-logger';

declare module '*.json' {
  const content: any;
  export default content;
}

declare module '*.html' {
  const content: any;
  export default content;
}
