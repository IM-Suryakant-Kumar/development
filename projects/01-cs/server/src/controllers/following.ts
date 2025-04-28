import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { User } from "../models";
import { IReq } from "../types";

export const createFollowing = asyncWrapper(async (req: IReq, res: Response) => {
	// following
	const user = await User.findByIdAndUpdate(
		req.user?._id,
		{ $push: { followings: req.params.userId } },
		{ new: true }
	).populate("followings");

	// followers
	await User.findByIdAndUpdate(req.params.userId, { $push: { followers: req.user?._id } });

	res.status(201).json({ success: true, user });
});

export const deleteFollowing = asyncWrapper(async (req: IReq, res: Response) => {
	//following
	const user = await User.findByIdAndUpdate(
		req.user?._id,
		{ $pull: { followings: req.params.userId } },
		{ new: true }
	);

	// followers
	await User.findByIdAndUpdate(req.params.userId, { $pull: { followers: req.user?._id } });

	res.status(202).json({ success: true, user });
});
