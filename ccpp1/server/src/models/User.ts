import { Document, model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export interface IUser extends Document {
	name: string;
	email: string;
	username: string;
	password: string;
	bio?: string;
	location?: string;
	website?: string;
	avatar?: string;
	banner?: string;
	followers: Schema.Types.ObjectId[];
	following: Schema.Types.ObjectId[];
	posts: Schema.Types.ObjectId[];
	likes: Schema.Types.ObjectId[];
	saves: Schema.Types.ObjectId[];
	comments: Schema.Types.ObjectId[];
	comparePassword(candidatePassword: string): Promise<boolean>;
	createJWTToken(): string;
}

const userSchema = new Schema<IUser>(
	{
		name: { type: String, required: true, minlength: 3, maxlength: 50 },
		email: { type: String, required: true, unique: true },
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true, select: false },
		bio: { type: String, maxlength: 160 },
		location: { type: String, maxlength: 100 },
		website: { type: String, maxlength: 100 },
		avatar: { type: String, maxlength: 100 },
		banner: { type: String, maxlength: 100 },
		followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
		following: [{ type: Schema.Types.ObjectId, ref: "User" }],
		posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
		likes: [{ type: Schema.Types.ObjectId, ref: "Post" }],
		saves: [{ type: Schema.Types.ObjectId, ref: "Post" }],
		comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
	},
	{ timestamps: true }
);

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return;
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (
	candidatePassword: string
): Promise<boolean> {
	return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.createJWTToken = function () {
	return jwt.sign(
		{ userId: this._id, name: this.name },
		process.env.JWT_SECRET as string,
		{ expiresIn: "5d" }
	);
};

export const User = model<IUser>("User", userSchema);
