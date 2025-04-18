import { Errback, NextFunction, Request, Response } from "express";

interface IError {
  name: string;
  statusCode: number;
  message: string;
}

export const errorHandleMiddleware = (err: IError, req: Request, res: Response, next: NextFunction) => {
  const customError = {
    statusCode: err.statusCode || 500,
    message: err.message || "Something went wrong"
  }

  // if(err.vali)

  res.status(customError.statusCode).json({
    success: false,
    message: customError.message,
    error: err
  })
}