// src/common/interfaces/response.interface.ts
export interface IResponse<T> {
  statusCode: number;
  message: string;
  data?: T;
}
