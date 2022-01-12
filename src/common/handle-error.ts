import HttpError from "../error/http.error"
import { Response } from 'express';

export const handleError = (err: Error | HttpError, res: Response): void => {
  if (err instanceof HttpError === false) {
    console.error(err.stack, ' - ERROR STACK')
  }
  res.status(err instanceof HttpError ? err.statusCode : 500).json({
    message: err instanceof HttpError ? err.message : 'Internal Server Error.',
    ...(err instanceof HttpError && err?.details) && { details: err.details }
  })
}