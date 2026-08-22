import { NextFunction, Request, Response } from "express";

export const errorHandlerMiddleware = (
	error: any,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const custonError = {
		statusCode: error.statusCode || 500,
		message: error.message || "Something went wrong",
	};

	res
		.status(custonError.statusCode)
		.json({ message: custonError.message, error });
};
