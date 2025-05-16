import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { errorHandlerMiddleware, notFoundMiddleware } from "./middlewares";
import { connectDB } from "./db";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
(async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(PORT, () =>
			console.log(`App is running at http://localhost:${PORT}`)
		);
	} catch (error) {
		console.error(error);
	}
})();
