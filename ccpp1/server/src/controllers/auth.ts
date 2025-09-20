import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { User } from "../models";
import { BadRequestError, NotFoundError } from "../errors";
import { sendToken } from "../utils";

export const signup = asyncWrapper(async (req: Request, res: Response) => {
	const { name, username, email, password } = req.body;
	if (!name || !username || !email || !password) {
		throw new BadRequestError("Please provide all fields");
	}
	const user = await User.create(req.body);
	sendToken(res, user, 201, "Signed up successfully");
});

export const login = asyncWrapper(async (req: Request, res: Response) => {
	const { email, password } = req.body;
	if (!email || !password) {
		throw new BadRequestError("Please provide email and password");
	}
	const user = await User.findOne({ email }).select("+password");
	if (!user) {
		throw new BadRequestError("Invalid credentials");
	}
	const isPasswordValid = await user.comparePassword(password);
	if (!isPasswordValid) {
		throw new BadRequestError("Invalid credentials");
	}
	sendToken(res, user, 200, "Logged in successfully");
});

export const logout = asyncWrapper(async (req: Request, res: Response) => {
	res
		.clearCookie("token", {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			signed: true,
		})
		.status(200)
		.json({ success: true, message: "User logged out successfully" });
});
