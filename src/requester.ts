import fetch from 'node-fetch';

/**
 * @remarks
 * A simple enum for the types of methods the Requester's request method can use (HTTP methods).
 */
export enum RequesterMethod {
  GET = 'GET',
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  CONNECT = 'CONNECT',
  OPTIONS = 'OPTIONS',
  TRACE = 'TRACE',
  PATCH = 'PATCH'
}

/**
 * @remarks
 * The basic cookie cutter response all Printful endpoints give.
 */
export interface RequesterResponse {
  /**
   * @remarks
   * The HTTP response code.
   */
  code: number;
  /**
   * @remarks
   * The JSON formatted response.
   */
  result: any;
}

/**
 * @remarks
 * No remarks really needed, but this essentially removes undefined [key, value] pairs from objects.
 * This is important for routes with optional body options.
 *
 * @see
 * https://stackoverflow.com/questions/286141/remove-blank-attributes-from-an-object-in-javascript/38340730
 */
const cleanObject = (obj: any): any => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) {
      delete obj[key];
    }
    if (typeof obj[key] === 'object') {
      return cleanObject(obj[key]);
    }
  });
  return obj;
};

export default class Requester {
  private defaultEndpoint!: string;
  private authorization!: string;
  /**
   *
   * @remarks
   * The constructor for the *vital* `request` method.
   * Unless you're planning to send in a pull request and improve this code, you probably shouldn't be here.
   *
   * @param defaultEndpoint - The default endpoint for the Printful API to be used in reqeusts.
   * @param authorization - The api key or authorization string used in requests for accessing protected Printful API endpoints.
   */
  constructor(defaultEndpoint: string, authorization: string) {
    this.defaultEndpoint = defaultEndpoint;
    this.authorization = authorization;
  }
  async request<T>(endpoint: string, method: RequesterMethod, data?: any) {
    if (data && typeof data === 'object') {
      cleanObject(data);
      if (Object.keys(data).length == 0) {
        data = undefined;
      }
    }
    const req = await fetch(`${this.defaultEndpoint}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(this.authorization).toString(
          'base64'
        )}`
      },
      ...(data ? { body: JSON.stringify(data) } : {})
    });
    const jsonResponse = await req.json();
    return jsonResponse as T;
  }
}
