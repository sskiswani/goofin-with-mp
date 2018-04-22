import chalk from 'chalk';
import pino from 'pino';

export const enum LogLevel {
  DEBUG = 20,
  INFO = 30,
  WARN = 40,
  ERROR = 50,
  USERLVL = 100
}

export const ColorMap = {
  [LogLevel.DEBUG]: chalk.blue,
  [LogLevel.INFO]: chalk.green,
  [LogLevel.WARN]: chalk.yellow,
  [LogLevel.ERROR]: chalk.red,
  [LogLevel.USERLVL]: chalk.white
};

function mapLevelToColor(value: number) {
  if (value <= LogLevel.DEBUG) {
    return ColorMap[LogLevel.DEBUG];
  }
  if (value <= LogLevel.INFO) {
    return ColorMap[LogLevel.INFO];
  }
  if (value <= LogLevel.WARN) {
    return ColorMap[LogLevel.WARN];
  }
  if (value <= LogLevel.ERROR) {
    return ColorMap[LogLevel.ERROR];
  }

  return ColorMap[LogLevel.USERLVL];
}

export const createLogger = (prettyPrint = true) => {
  if (!pino.pretty) {
    return pino({ prettyPrint });
  }

  const pretty = pino.pretty({
    formatter: ({ pid, hostname, name, level, time, v, ...value }) => {
      let line = `[${new Date(time).toLocaleString()}] ${mapLevelToColor(level)}: `;
      if (value.type === 'Error') {
        line += `\n${chalk.bgRed(value.stack)}`;
      } else if (value.msg) {
        line += chalk.cyan(value.msg);
      } else {
        line += `\n${chalk.magentaBright(JSON.stringify(value, null, 2))}`;
      }
      return line;
    }
  });

  pretty.pipe(process.stdout);
  return pino({}, pretty);
};

const logger = createLogger(true);
export default logger;
