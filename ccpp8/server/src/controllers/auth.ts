import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { User } from "../models";
import { BadRequestError } from "../errors";

export interface IRequest extends Request {
	user?: User;
}

export const signup = asyncWrapper(async (req: IRequest, res: Response) => {
	const isEmailExists = await User.findOne({ email: req.body.email });
	if (isEmailExists) throw new BadRequestError("Email is Alresdy Exists.");

	const user = await User.create(req.body);
	const token = user.createJWTToken();
	res.status(201).json({ token, message: "Signed up" });
});

export const login = asyncWrapper(async (req: IRequest, res: Response) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email }).select("+password");
	if (!user) throw new BadRequestError("Invalid credentials.");

	const isPasswordValid = await user.comparePassword(password);
	if (!isPasswordValid) throw new BadRequestError("Invalid credentials.");

	const token = user.createJWTToken();
	res.status(200).json({ token, message: "Logged in" });
});

export const logout = asyncWrapper(async (req: IRequest, res: Response) => {
	res.status(200).json({ message: "logged out." });
});

export const getProfile = asyncWrapper(async (req: IRequest, res: Response) => {
	res.status(200).json({ user: req.user });
});

export const updateProfile = asyncWrapper(
	async (req: IRequest, res: Response) => {
		await User.findByIdAndUpdate(req.user?._id, req.body);
		res.status(200).json({ message: "Profile updated" });
	},
);
