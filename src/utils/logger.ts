import pino from 'pino';
import pretty from 'pino-pretty';

const loggerConfig = {
  level: process.env.LOG_LEVEL || 'info',
};

let logger = pino(loggerConfig);
if (process.env.NODE_ENV === 'development') {
  logger = pino({
    ...loggerConfig,
  }, pretty({
    colorize: true
  }));
}

export default logger;
