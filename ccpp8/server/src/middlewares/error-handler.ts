import { NextFunction, Request, Response } from "express";

export const errorHandlerMiddleware = (
	error: any,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const customError = {
		message: error.message || "Something went wrong",
		statusCode: error.statusCode || "500",
	};

	res.status(customError.statusCode).json({ message: customError.message });
};
