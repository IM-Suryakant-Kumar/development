import { model, Schema } from "mongoose";
import { INote } from "../types";

const noteSchema = new Schema<INote>(
	{
    author: {type: Schema.Types.ObjectId, ref: "User"},
		title: {
			type: String,
			required: [true, "Please provide title"],
			minlength: [3, "Title should not be less than 3 chracters"],
		},
		content: { type: String },
		background: { type: String },
		label: { type: String },
	},
	{ timestamps: true }
);

export const Note = model<INote>("Note", noteSchema);
