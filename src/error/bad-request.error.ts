import HttpError from './http.error';

export default class BadRequestError extends HttpError {
  constructor(message = 'Bad Request.', details?: string[]) {
    super(message, 400, details);
  }
}
