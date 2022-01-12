import HttpError from './http.error';

export default class NotFoundError extends HttpError {
  constructor(message = 'Not Found.') {
    super(message, 404);
  }
}
