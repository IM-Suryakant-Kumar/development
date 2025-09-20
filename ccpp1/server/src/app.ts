import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { errorHandlerMiddleware, notFoundMiddleware } from "./middlewares";
import { connectDB } from "./db";

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors({ origin: ["*"], credentials: true }));
app.use(morgan("tiny"));

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
(async () => {
	try {
		// await connectDB(MONGO_URI!);
		app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
	} catch (error) {
		console.error(error);
	}
})();