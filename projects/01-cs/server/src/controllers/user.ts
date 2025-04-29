import { Response } from "express";
import { asyncWrapper } from "../middlewares";
import { User } from "../models";
import { IReq } from "../types";

export const getUsers = asyncWrapper(async (req: IReq, res: Response) => {
	const users = await User.find()
		.populate("followers")
		.populate("followings")
		.populate("posts")
		.populate("saved")
		.populate("liked");

	res.status(200).json({ success: true, users });
});

export const updateUser = asyncWrapper(async (req: IReq, res: Response) => {
	await User.findByIdAndUpdate(req.user?._id, req.body);
	res.status(200).json({ success: true, message: "Profile updated successfully" });
});

export const createFollowing = asyncWrapper(async (req: IReq, res: Response) => {
	// following
	await User.findByIdAndUpdate(req.user?._id, { $push: { followings: req.params.userId } });
	// followers
	await User.findByIdAndUpdate(req.params.userId, { $push: { followers: req.user?._id } });
	res.status(201).json({ success: true, message: "Followed successfully" });
});

export const deleteFollowing = asyncWrapper(async (req: IReq, res: Response) => {
	//following
	await User.findByIdAndUpdate(req.user?._id, { $pull: { followings: req.params.userId } });
	// followers
	await User.findByIdAndUpdate(req.params.userId, { $pull: { followers: req.user?._id } });
	res.status(202).json({ success: true, message: "Unfollowed successfully" });
});
