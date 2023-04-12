import winston from 'winston';

let logger: winston.Logger | null = null;

export const getLogger = () => {
    if (logger) {
        return logger;
    }
    logger = winston.createLogger({
        format: winston.format.combine(
            winston.format.splat()
        ),
        transports: [
            new winston.transports.Console({
                format: winston.format.simple(),
            })
        ]
    });
    return logger;
}