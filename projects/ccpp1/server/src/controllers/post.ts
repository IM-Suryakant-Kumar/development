import { Response } from "express";
import { asyncWrapper } from "../middlewares";
import { Post } from "../models";
import { IReq } from "../types";

export const createPost = asyncWrapper(async (req: IReq, res: Response) => {
	await Post.create({ ...req.body, author: req.user?._id });
	res.status(201).json({ success: true, message: "Post created successfully" });
});

export const getPosts = asyncWrapper(async (req: IReq, res: Response) => {
	const posts = await Post.find()
		.populate("author")
		.populate("liked")
		.populate("saved")
		.populate("comments");

	res.status(200).json({ success: true, posts });
});

export const updatePost = asyncWrapper(async (req: IReq, res: Response) => {
	const body = req.body;
	const q = req.query.q;

	if (q === "liked") body.$push = { liked: req.user?._id };
	else if (q === "disliked") body.$pull = { liked: req.user?._id };
	else if (q === "saved") body.$push = { saved: req.user?._id };
	else if (q === "unsaved") body.$pull = { saved: req.user?._id };

	await Post.findByIdAndUpdate(req.params.postId, body);

	res.status(200).json({ success: true, message: "Post updated successfully" });
});

export const deletePost = asyncWrapper(async (req: IReq, res: Response) => {
	await Post.findByIdAndDelete(req.params.postId);
	res.status(202).json({ success: true, message: "Post deleted successfully" });
});
