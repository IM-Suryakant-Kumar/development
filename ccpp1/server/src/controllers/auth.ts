import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { User } from "../models";
import { BadRequestError, NotFoundError } from "../errors";

export const signup = asyncWrapper(async (req: Request, res: Response) => {
	const { name, username, email, password } = req.body;
	if (!name || !username || !email || !password) {
		throw new BadRequestError("Please provide all fields");
	}
	const user = await User.create(req.body);
	res
		.status(201)
		.json({ success: true, user, message: "User created successfully" });
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
	const token = user.createJWTToken();
	res.status(200).json({ success: true, token });
});

export const logout = asyncWrapper(async (req: Request, res: Response) => {
	res
		.status(200)
		.json({ success: true, message: "User logged out successfully" });
});
