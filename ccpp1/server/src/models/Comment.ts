import { model, Schema } from "mongoose";

export interface IComment extends Document {
	content: string;
	author: Schema.Types.ObjectId;
	post: Schema.Types.ObjectId;
}

const commentSchema = new Schema<IComment>(
	{
		content: { type: String, required: true, maxlength: 280 },
		author: { type: Schema.Types.ObjectId, ref: "User", required: true },
		post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
	},
	{ timestamps: true }
);

export const Comment = model<IComment>("Comment", commentSchema);
