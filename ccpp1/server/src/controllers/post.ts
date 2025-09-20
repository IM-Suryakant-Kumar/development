import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { Post } from "../models";
import { NotFoundError } from "../errors";

export const createPost = asyncWrapper(async (req: Request, res: Response) => {
	const { userId, content, image } = req.body;
	const post = await Post.create({ userId, content, image });
	res.status(201).json({ success: true, message: "Post created", post });
});

export const getAllPosts = asyncWrapper(async (req: Request, res: Response) => {
	const posts = await Post.find()
		.populate("author")
		.populate("comments")
		.populate("likes")
		.populate("saves");
	res.status(200).json({ success: true, posts });
});

export const getPostById = asyncWrapper(async (req: Request, res: Response) => {
	const { id } = req.params;
	const post = await Post.findById(id)
		.populate("author")
		.populate("comments")
		.populate("likes")
		.populate("saves");
	if (!post) {
		throw new NotFoundError("Post not found");
	}
	res.status(200).json({ success: true, post });
});

export const updatePost = asyncWrapper(async (req: Request, res: Response) => {
	const { id } = req.params;
	const { content, image } = req.body;
	const post = await Post.findByIdAndUpdate(
		id,
		{ content, image },
		{ new: true, runValidators: true }
	);
	if (!post) {
		throw new NotFoundError("Post not found");
	}
	res.status(200).json({ message: "Post updated", post });
});

export const deletePost = asyncWrapper(async (req: Request, res: Response) => {
	const { id } = req.params;
	const post = await Post.findByIdAndDelete(id);
	if (!post) {
		throw new NotFoundError("Post not found");
	}
	res.status(200).json({ message: "Post deleted" });
});

export const likePost = asyncWrapper(async (req: Request, res: Response) => {
	const { id } = req.params;
	const { userId } = req.body;
	const post = await Post.findById(id);
	if (!post) {
		throw new NotFoundError("Post not found");
	}
	if (post.likes.includes(userId)) {
		res.status(400).json({ message: "Post already liked" });
	}
	post.likes.push(userId);
	await post.save();
	res.status(200).json({ message: "Post liked", post });
});

export const unlikePost = asyncWrapper(async (req: Request, res: Response) => {
	const { id } = req.params;
	const { userId } = req.body;
	const post = await Post.findById(id);
	if (!post) {
		res.status(404).json({ message: "Post not found" });
	}
	if (!post.likes.includes(userId)) {
		res.status(400).json({ message: "Post not liked yet" });
	}
	post.likes = post.likes.filter((like) => like !== userId);
	await post.save();
	res.status(200).json({ message: "Post unliked", post });
});

export const savePost = asyncWrapper(async (req: Request, res: Response) => {
	const { id } = req.params;
	const { userId } = req.body;
	const post = await Post.findById(id);
	if (!post) {
		res.status(404).json({ message: "Post not found" });
	}
	if (post.savedBy.includes(userId)) {
		res.status(400).json({ message: "Post already saved" });
	}
	post.savedBy.push(userId);
	await post.save();
	res.status(200).json({ message: "Post saved", post });
});

export const unsavePost = asyncWrapper(async (req: Request, res: Response) => {
	const { id } = req.params;
	const { userId } = req.body;
	const post = await Post.findById(id);
	if (!post) {
		res.status(404).json({ message: "Post not found" });
	}
	if (!post.savedBy.includes(userId)) {
		res.status(400).json({ message: "Post not saved yet" });
	}
	post.savedBy = post.savedBy.filter((user) => user !== userId);
	await post.save();
	res.status(200).json({ message: "Post unsaved", post });
});
