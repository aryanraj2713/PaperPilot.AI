class ErrorClass extends Error {
  statusCode: number;
  constructor(message: string, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ErrorClass;
