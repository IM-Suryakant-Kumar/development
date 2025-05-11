import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./db";
import { authenticateUser, errorHandlerMiddleware, notFoundMiddlewware } from "./middlewares";
import { archiveRouter, authRouter, noteRouter, trashRouter } from "./routes";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({ origin: "*", credentials: true }));
app.use(morgan("dev"));

app.use("/auth", authRouter);
app.use("/note", authenticateUser, noteRouter);
app.use("/archive", authenticateUser, archiveRouter);
app.use("/trash", authenticateUser, trashRouter);

app.use(notFoundMiddlewware);
app.use(errorHandlerMiddleware);

(async () => {
	try {
		await connectDB(process.env.MONGO_URL as string);
		app.listen(PORT, () => console.log(`App is running at http://localhost:${PORT}`));
	} catch (error) {
		console.error(error);
	}
})();
