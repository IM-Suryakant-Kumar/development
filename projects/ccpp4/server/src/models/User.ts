import { model, Schema } from "mongoose";
import { compare, genSalt, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IUser } from "../types";

const userSchema = new Schema<IUser>(
	{
		name: {
			type: String,
			required: [true, "Please Provide name"],
			minlength: [3, "Name should not be less than 3 and greater than 20 chracters"],
			maxlength: [20, "Name should not be less than 3 and greater than 20 chracters"],
		},
		email: { type: String, required: [true, "Please Provide email"] },
		password: {
			type: String,
			required: [true, "Please Provide password"],
			minlength: [3, "Password should not be less than 3 chracters"],
		},
		notes: [{ type: Schema.Types.ObjectId, ref: "Note" }],
		archives: [{ type: Schema.Types.ObjectId, ref: "Note" }],
		trashes: [{ type: Schema.Types.ObjectId, ref: "Note" }],
	},
	{ timestamps: true }
);

userSchema.pre("save", async function () {
	if (!this.isModified("password")) return;
	const salt = await genSalt(10);
	this.password = await hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (candidatePassword: string) {
	return await compare(candidatePassword, this.password);
};

userSchema.methods.createJWTToken = function () {
	return sign({ userId: this._id }, process.env.JWT_SECRET as string, {
		expiresIn: "5d",
	});
};

export const User = model<IUser | any>("User", userSchema);
