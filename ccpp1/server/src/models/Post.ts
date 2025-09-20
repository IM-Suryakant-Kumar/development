import { model, Schema } from "mongoose";
import { User } from "./User";
import { Comment } from "./Comment";

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

postSchema.post("findOneAndDelete", async function (doc) {
	if (doc) {
		await User.updateMany({ likes: doc._id }, { $pull: { likes: doc._id } });
		await User.updateMany({ saves: doc._id }, { $pull: { saves: doc._id } });
		await Comment.deleteMany({ post: doc._id });
	}
});

export const Post = model<IPost>("Post", postSchema);
