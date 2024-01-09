import { NextFunction, Request, Response } from 'express';
import { ServiceException } from '@common/exceptions';
import { logger } from '@utils/logger';

export const ErrorMiddleware = (error: ServiceException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Та дараа дахин оролдоно уу';

    logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
    res.status(status).json({ status, message });
  } catch (error) {
    next(error);
  }
};
