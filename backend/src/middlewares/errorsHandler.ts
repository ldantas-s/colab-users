import { NextFunction, Response, Request } from 'express';

import BaseError from '../utils/errors/BaseError';

export const errorsHandler = (
  error: BaseError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.statusCode).json(error.serialize());
};
