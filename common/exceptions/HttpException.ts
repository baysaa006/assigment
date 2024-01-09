import { ErrorType } from "./Errors";

export class ServiceException extends Error {
  status: number;
  constructor(public readonly error: ErrorType, message?: string) {
    super(message || error.message);
    this.status = error.status;
  }
}
