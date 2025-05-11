import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { Note, User } from "../models";

export const createTrash = asyncWrapper(async (req: Request | any, res: Response) => {
	await User.findByIdAndUpdate(req.user._id, {
		$pull: { notes: req.params.noteId },
		$push: { trashes: req.params.noteId },
	});
	res.status(201).json({ success: true, message: "Trash created successfully" });
});

export const restoreTrash = asyncWrapper(async (req: Request | any, res: Response) => {
	await User.findByIdAndUpdate(req.user._id, {
		$pull: { trashes: req.params.noteId },
		$push: { notes: req.params.noteId },
	});
	res.status(201).json({ success: true, message: "Trash deleted successfully" });
});

export const deleteTrash = asyncWrapper(async (req: Request | any, res: Response) => {
	await User.findByIdAndUpdate(req.user._id, { $pull: { trashes: req.params.noteId } });
	await Note.findByIdAndDelete(req.params.noteId);
	res.status(201).json({ success: true, message: "Trash deleted successfully" });
});
