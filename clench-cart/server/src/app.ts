import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { errorHandlerMidleware, notFoundMiddleware } from "./middlewares";
import { connectDB } from "./db";

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({ credentials: true }));
app.use(morgan("dev"));

app.use(notFoundMiddleware);
app.use(errorHandlerMidleware);
(async () => {
	try {
		await connectDB(MONGO_URI);
		app.listen(PORT, () =>
			console.log(`App is running at http://localhost:${PORT}`)
		);
	} catch (error) {
		console.error(error);
	}
})();
