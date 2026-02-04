import { model, Schema } from "mongoose";
import { compare, genSalt, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

export interface User {
	_id: string;
	name: string;
	email: string;
	password: string;

	comparePassword(password: string): Promise<boolean>;
	createJWTToken(): string;
}

const userSchema = new Schema<User>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true, select: false },
	},
	{ timestamps: true },
);

userSchema.pre("save", async function () {
	if (!this.isModified("password")) return;
	const salt = await genSalt(10);
	this.password = await hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (password: string) {
	return await compare(password, this.password);
};

userSchema.methods.createJWTToken = function () {
	return sign({ userId: this._id }, process.env.JWT_SECRET!, {
		expiresIn: "1d",
	});
};

export const User = model<User>("User", userSchema);
