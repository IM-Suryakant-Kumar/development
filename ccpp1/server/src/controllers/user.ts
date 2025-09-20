import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { Post, User } from "../models";
import { NotFoundError } from "../errors";

export const getUserProfile = asyncWrapper(
  async (req: Request, res: Response) => {
    const {
      user: { _id },
    } = req.body;
    const user = await User.findById(_id).select("-password");
    if (!user) {
      throw new NotFoundError("User not found");
    }
    res.status(200).json({ success: true, user });
  }
);

export const updateUserProfile = asyncWrapper(
  async (req: Request, res: Response) => {
    const {
      user: { _id },
    } = req.body;
    const user = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      throw new NotFoundError("User not found");
    }
    res.status(200).json({ success: true, user });
  }
);

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

export const followUser = asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = req.body;

  const user = await User.findByIdAndUpdate(userId, { $push: { following: id } }, { new: true });
  await User.findByIdAndUpdate(id, { $push: { followers: userId } }, { new: true });

  res.status(200).json({ success: true, message: "User followed", user });
});

export const unfollowUser = asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = req.body;

  const user = await User.findByIdAndUpdate(userId, { $pull: { following: id } }, { new: true });
  await User.findByIdAndUpdate(id, { $pull: { followers: userId } }, { new: true });

  res.status(200).json({ success: true, message: "User unfollowed", user });
});

export const likesPost = asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = req.body;
  await User.findByIdAndUpdate(userId, { $push: { likes: id } }, { new: true });
  await Post.findByIdAndUpdate(id, { $push: { likes: userId } }, { new: true });
  res.status(200).json({ success: true, message: "Post liked" });
});

export const unlikesPost = asyncWrapper(async (req: Request, res: Response) => { 
  const { id } = req.params;
  const { userId } = req.body;
  await User.findByIdAndUpdate(userId, { $pull: { likes: id } }, { new: true });
  await Post.findByIdAndUpdate(id, { $pull: { likes: userId } }, { new: true });
  res.status(200).json({ success: true, message: "Post unliked" });
});

export const savesPost = asyncWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = req.body;
  await User.findByIdAndUpdate(userId, { $push: { saves: id } }, { new: true });
  await Post.findByIdAndUpdate(id, { $push: { saves: userId } }, { new: true });
  res.status(200).json({ success: true, message: "Post saved" });
});

export const unsavesPost = asyncWrapper(async (req: Request, res: Response) => { 
  const { id } = req.params;
  const { userId } = req.body;
  await User.findByIdAndUpdate(userId, { $pull: { likes: id } }, { new: true });
  await Post.findByIdAndUpdate(id, { $pull: { likes: userId } }, { new: true });
  res.status(200).json({ success: true, message: "Post unliked" });
});
