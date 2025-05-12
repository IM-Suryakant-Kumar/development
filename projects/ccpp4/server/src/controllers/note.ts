import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { Note, User } from "../models";

export const createNote = asyncWrapper(async (req: Request | any, res: Response) => {
	const note = await Note.create({ ...req.body, author: req.user._id });
	await User.findByIdAndUpdate(req.user._id, { $push: { notes: note._id } });
	res.status(201).json({ success: true, message: "Note created successfully" });
});

export const updateNote = asyncWrapper(async (req: Request, res: Response) => {
	await Note.findByIdAndUpdate(req.params.noteId, req.body);
	res.status(200).json({ success: true, message: "Note updated successfully" });
});

export const deleteNote = asyncWrapper(async (req: Request | any, res: Response) => {
	await Note.findByIdAndDelete(req.params.noteId);
	await User.findByIdAndUpdate(req.user._id, { $pull: { notes: req.params.noteId } });
	res.status(200).json({ success: true, message: "Note deleted successfully" });
});
