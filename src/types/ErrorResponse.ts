import { RequesterResponse } from '../requester';

interface ErrorObject {
  /**
   * @remarks
   * A short error code response name.
   *
   * @example
   * 'BadRequest'
   */
  reason: string;
  /**
   * @remarks
   * The same human readable error string from the `ErrorResponse` type.
   */
  message: string;
}

/**
 * @remarks
 * The format in which an error is returned.
 */
export interface ErrorResponse extends RequesterResponse {
  /**
   * @remarks
   * Human readable error string.
   */
  result: string;
  /**
   * @remarks
   * An error object describing the received error.
   */
  error: ErrorObject;
}
