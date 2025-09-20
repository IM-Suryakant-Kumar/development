import { NextFunction, Request, Response } from "express";
import { asyncWrapper } from "./async";
import { UnauthenticatedError } from "../errors";
import { verify } from "jsonwebtoken";

export const authenticateUser = asyncWrapper(
	async (req: Request, res: Response, next: NextFunction) => {
		const { token } = req.signedCookies;
		if (!token) throw new UnauthenticatedError("Authentication Failed!");
		const { userId } = verify(token, process.env.JWT_SECRET!) as { userId: string };
    req.body.userId = userId;
    next();
	}
);
