import * as Joi from 'joi';
import BadRequestError from '../error/bad-request.error';

export const validatePayload = (payload: unknown, schema: Joi.Schema<any>): void => {
  const result = schema.validate(payload, { abortEarly: false });
  if (result?.error?.details) {
    throw new BadRequestError('Validation Error.', result.error.details.map((error) => error.message.replace(/\"/g, "'")));
  }
};
