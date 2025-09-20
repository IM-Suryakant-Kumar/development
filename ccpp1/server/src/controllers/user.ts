import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { User } from "../models";
import { NotFoundError } from "../errors";

export const getAllUsers = asyncWrapper(async (req: Request, res: Response) => {
	const users = await User.find()
		.populate("posts")
		.populate("followers")
		.populate("following")
		.populate("likes")
		.populate("saves");
	res.status(200).json({ success: true, users });
});

export const getUserById = asyncWrapper(async (req: Request, res: Response) => {
	const { id } = req.params;
	const user = await User.findById(id)
		.populate("posts")
		.populate("followers")
		.populate("following")
		.populate("likes")
		.populate("saves");
	if (!user) {
		throw new NotFoundError("User not found");
	}
	res.status(200).json({ success: true, user });
});

export const updateUser = asyncWrapper(async (req: Request, res: Response) => {
	const { id } = req.params;
	const updatedUser = await User.findByIdAndUpdate(id, req.body, {
		new: true,
		runValidators: true,
	});
	if (!updatedUser) {
		throw new NotFoundError("User not found");
	}
	res.status(200).json({ success: true, user: updatedUser });
});

export const deleteUser = asyncWrapper(async (req: Request, res: Response) => {
	const { id } = req.params;
	const deletedUser = await User.findByIdAndDelete(id);
	if (!deletedUser) {
		throw new NotFoundError("User not found");
	}
	res.status(200).json({ success: true, user: deletedUser });
});
