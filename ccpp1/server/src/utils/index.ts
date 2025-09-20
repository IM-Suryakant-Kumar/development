import { Response } from "express";
import { IUser } from "../models";

export const sendToken = (
	res: Response,
	user: IUser,
	statusCode: number,
	message: string
) => {
	const token = user.createJWTToken();
	res
		.cookie("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			signed: true,
			maxAge: 24 * 60 * 60 * 1000,
		})
		.status(statusCode)
		.json({ success: true, message });
};
