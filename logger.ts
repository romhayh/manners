import winston from 'winston';
const logConfiguration = {
    transports: [
        new winston.transports.File({filename : 'logs/mannings.log'}),
        new winston.transports.Console()

    ],
    format: winston.format.combine(
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
        winston.format.printf(info => `${[info.timestamp]}: ${info.level}:\t ${info.message}`),
    )
}
export const logger = winston.createLogger(logConfiguration);