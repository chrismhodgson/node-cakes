export default class HttpError extends Error {
  public statusCode: number;

  public details: any;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(message: string, statusCode = 500, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
}
