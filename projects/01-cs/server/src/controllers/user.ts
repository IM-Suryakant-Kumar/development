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

export const getProfile = asyncWrapper(async (req: IReq, res: Response) => {
  res.status(200).json({ success: true, user: req.user });
});

export const updateProfile = asyncWrapper(async (req: IReq, res: Response) => {
  const user = await User.findByIdAndUpdate(req.user?._id, req.body, { new: true });
  res.status(200).json({ success: true, user});
});