import { ServerError } from "../errors";
import { HttpResponse } from "../protocols";

export class HttpHelper {
  static BAD_REQUEST = (err: Error): HttpResponse<Error> => ({
    statusCode: 400,
    body: err,
  });

  static NOT_FOUND = (err: Error): HttpResponse<Error> => ({
    statusCode: 404,
    body: err,
  });

  static INVALID_PARAMETERS = (err: Error): HttpResponse<Error> => ({
    statusCode: 422,
    body: err,
  });
  static OK = <T>(data: T, message?: string): HttpResponse<T> => ({
    statusCode: 200,
    body: data,
    message,
  });
  static SERVER_ERROR = (err: Error): HttpResponse<Error> => ({
    statusCode: 500,
    body: new ServerError(err.stack as string),
  });
}
