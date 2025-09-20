import { NextFunction, Request, Response } from "express";
import { Error } from "mongoose";

export const errorHandlerMiddleware = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let customError = {
		message: err.message || "Something went wrong. try again",
		statusCode: err.statusCode || 500,
	};

  if (err instanceof Error.ValidationError) {
      customError.message = Object.values(err.errors)
        .map((item) => item.message)
        .join(",");
      customError.statusCode = 400;
    }
  
    if (err instanceof Error.CastError) {
      customError.message = "Invalid Id Format.";
      customError.statusCode = 400;
    }
  
    if (err.name === "MongoServerError" && err.code === 11000) {
      customError.message = `${Object.keys(err.keyValue)} is already exists.`;
      customError.statusCode = 409;
    }

	res
		.status(customError.statusCode)
		.json({ success: false, message: customError.message });
};
