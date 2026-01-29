import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { IUser, User } from "../models";
import { sendToken } from "../utils";
import { BadRequestError } from "../errors";

export interface IRequest extends Request {
	user?: IUser;
}

export const signup = asyncWrapper(async (req: IRequest, res: Response) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password)
		throw new BadRequestError("Please Provide all values");

	const isEmailExist = await User.find({ email });
	if (isEmailExist) throw new BadRequestError("This email is already exists.");

	const user = await User.create(req.body);
	sendToken(res, 201, user, "Signed up successfully.");
});

export const login = asyncWrapper(async (req: IRequest, res: Response) => {
	const { email, password } = req.body;
	if (!email || !password)
		throw new BadRequestError("Please Provide all values");

	const user = await User.findOne({ email }).select("+password");
	if (!user) throw new BadRequestError("Invalid credentials");

	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) throw new BadRequestError("Invalid credentials");

	sendToken(res, 200, user, "Logged in successfully.");
});

export const logout = asyncWrapper(async (req: IRequest, res: Response) => {
	res.status(200).json({ message: "Logged out successfully." });
});

export const getProfile = asyncWrapper(async (req: IRequest, res: Response) => {
	res.status(200).json({ user: req?.user });
});

export const updateProfile = asyncWrapper(
	async (req: IRequest, res: Response) => {
		await User.findByIdAndUpdate(req.user?._id, req.body);
		res.status(200).json({ message: "Profile updated successfully." });
	},
);
