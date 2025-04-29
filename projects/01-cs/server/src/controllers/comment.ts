import { Response } from "express";
import { asyncWrapper } from "../middlewares";
import { Comment, Post } from "../models";
import { IReq } from "../types";

export const createComment = asyncWrapper(async (req: IReq, res: Response) => {
	const comment = await Comment.create({ ...req.body, author: req.user?._id });
	await Post.findByIdAndUpdate(
		req.params.postId,
		{ $push: { comments: comment._id } },
	);
	res.status(201).json({ success: true, message: "Comment created successfully" });
});

export const updateComment = asyncWrapper(async (req: IReq, res: Response) => {
	await Comment.findByIdAndUpdate(req.params.commentId, req.body);
	res.status(200).json({ success: true, message: "Comment updated successfully" });
});

export const deleteComment = asyncWrapper(async (req: IReq, res: Response) => {
	await Comment.findByIdAndDelete(req.params.commentId);
	await Post.findByIdAndUpdate(
		req.params.postId,
		{ $pull: { comments: req.params.commentId } }
	);
	res.status(202).json({ success: true, message: "Comment deleted successfully" });
});
