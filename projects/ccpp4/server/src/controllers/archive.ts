import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { Note, User } from "../models";

export const createArchive = asyncWrapper(async (req: Request | any, res: Response) => {
	await User.findByIdAndUpdate(req.user._id, {
		$pull: { notes: req.params.noteId },
		$push: { archives: req.params.noteId },
	});
	res.status(201).json({ success: true, message: "Archive created successfully" });
});

export const restoreArchive = asyncWrapper(async (req: Request | any, res: Response) => {
	await User.findByIdAndUpdate(req.user._id, {
		$pull: { archives: req.params.noteId },
		$push: { notes: req.params.noteId },
	});
	res.status(201).json({ success: true, message: "Archive deleted successfully" });
});

export const deleteArchive = asyncWrapper(async (req: Request | any, res: Response) => {
	await User.findByIdAndUpdate(req.user._id, { $pull: { archives: req.params.noteId } });
	await Note.findByIdAndDelete(req.params.noteId);
	res.status(201).json({ success: true, message: "Archive deleted successfully" });
});
