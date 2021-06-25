class ApplicationError extends Error {
  get name(): string {
    return this.constructor.name;
  }

  get statusCode(): number {
    return 500;
  }
}

class BadRequest extends ApplicationError {
  get statusCode(): number {
    return 400;
  }
}

class Unauthorized extends ApplicationError {
  get statusCode(): number {
    return 401;
  }
}

class NotFound extends ApplicationError {
  get statusCode(): number {
    return 404;
  }
}

export { ApplicationError, BadRequest, Unauthorized, NotFound };
