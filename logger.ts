import winston from 'winston';
const logConfiguration = {
    transports: [
        new winston.transports.File({filename : 'logs/mannings.log'})
    ],
    format: winston.format.combine(
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
        winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )
}
export const logger = winston.createLogger(logConfiguration);