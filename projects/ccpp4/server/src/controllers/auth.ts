import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { User } from "../models";
import { BadRequestError, UnauthenticatedError } from "../errors";

export const signup = asyncWrapper(async (req: Request, res: Response) => {
	const user = await User.create(req.body);
	const token = user.createJWTToken();
	res.status(201).json({ success: true, message: "Signed up successfully", token });
});

export const login = asyncWrapper(async (req: Request, res: Response) => {
	const { email, password } = req.body;

	if (!(email && password)) throw new BadRequestError("Please provide email and password");

	const user = await User.findOne({ email });
	if (!user) throw new UnauthenticatedError("Invalid Credentials");

	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid Credentials");

	const token = user.createJWTToken();

	res.status(200).json({ success: true, message: "Logged in successfully", token });
});

export const logout = asyncWrapper(async (req: Request, res: Response) => {
	res.status(200).json({ success: true, message: "Logged out successfully", token: null });
});

export const getProfile = asyncWrapper(async (req: Request | any, res: Response) => {
	res.status(200).json({ success: true, user: req.user });
});

export const updateProfile = asyncWrapper(async (req: Request | any, res: Response) => {
	await User.findByIdAndUpdate(req.user._id, req.body);
	res.status(200).json({ success: true, message: "Profile updated successfully" });
});
