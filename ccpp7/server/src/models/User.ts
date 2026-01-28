import { model, Schema } from "mongoose";
import { compare, genSalt, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

export interface IUser {
	_id: Schema.Types.ObjectId;
	name: string;
	email: string;
	password: string;
	bio: string;
	school: string;
	work: string;
	city: string;
	country: string;

	comparePassword(password: string): Promise<boolean>;
	createJWTToken(): string;
}

const userSchema = new Schema<IUser>(
	{
		name: { type: String, required: [true, "Please provide name"] },
		email: {
			type: String,
			required: [true, "Please provide email"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please provide password"],
			select: false,
		},
		bio: { type: String },
		school: { type: String },
		work: { type: String },
		city: { type: String },
		country: { type: String },
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
	return sign({ userId: this._id }, process.env.JWT_SECRET!);
};

export const User = model<IUser>("User", userSchema);
