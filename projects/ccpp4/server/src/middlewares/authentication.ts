import { NextFunction, Request, Response } from "express";
import { UnauthenticatedError } from "../errors";
import { User } from "../models";
import { verify } from "jsonwebtoken";

export const authenticateUser = async (req: Request | any, res: Response, next: NextFunction) => {
	const token = req.headers.authorization?.split(" ")[1];
	if (!token) throw new UnauthenticatedError("Authentication Failed!");

	const { userId } = verify(token, process.env.JWT_SECRET as string) as any;
	const user = await User.findById(userId).populate(["notes", "archives", "trashes"]);
	if (!user) throw new UnauthenticatedError("Authentication Failed");

	req.user = user;
	next();
};
