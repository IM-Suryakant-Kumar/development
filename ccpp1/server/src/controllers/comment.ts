import { asyncWrapper } from "../middlewares";
import { Request, Response } from "express";
import { Comment, Post } from "../models";
import { NotFoundError } from "../errors";

export const createComment = asyncWrapper(
	async (req: Request, res: Response) => {
		const { userId, postId, content } = req.body;
		const comment = await Comment.create({ userId, postId, content });
		await Post.findByIdAndUpdate(
			postId,
			{ $push: { comments: comment._id } },
			{ new: true }
		);
		res
			.status(201)
			.json({ success: true, message: "Comment created", comment });
	}
);

export const deleteComment = asyncWrapper(
	async (req: Request, res: Response) => {
		const { id } = req.params;
		const comment = await Comment.findByIdAndDelete(id);
		if (!comment) {
			throw new NotFoundError("Comment not found");
		}
		res.status(200).json({ success: true, message: "Comment deleted" });
	}
);
