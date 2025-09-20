import { model, Schema } from "mongoose";

export interface IPost extends Document {
	content: string;
	image?: string;
	author: Schema.Types.ObjectId;
	likes: Schema.Types.ObjectId[];
	saves: Schema.Types.ObjectId[];
	comments: Schema.Types.ObjectId[];
}
const postSchema = new Schema<IPost>(
	{
		content: { type: String, required: true, maxlength: 280 },
		image: { type: String, maxlength: 100 },
		author: { type: Schema.Types.ObjectId, ref: "User", required: true },
		likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
		saves: [{ type: Schema.Types.ObjectId, ref: "User" }],
		comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
	},
	{ timestamps: true }
);

postSchema;

export const Post = model<IPost>("Post", postSchema);
