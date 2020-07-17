abstract class BaseError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
  }

  abstract serialiseErrors(): {
    message: string;
    field?: string;
  }[];
}

export default BaseError;
