import BaseError from "./BaseError";

export class InvalidRouteError extends BaseError {
  statusCode = 404;
  message = "Route doesn't exist";

  constructor(message: string) {
    super(message);
  }

  serialiseErrors() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
