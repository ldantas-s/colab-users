export default class BaseError extends Error {
  constructor(message: string, public statusCode: number, public type: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }

  serialize(): { [key: string]: unknown } {
    return { type: this.type, message: this.message };
  }
}
