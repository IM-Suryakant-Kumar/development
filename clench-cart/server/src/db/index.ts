import mongoose from "mongoose";

export const connectDB = async (url: any) => await mongoose.connect(url);
