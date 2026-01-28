import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { connect } from "mongoose";
import { errorHandlerMiddleware, notFoundMiddleware } from "./middlewares";
import { authRouter } from "./routes";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(helmet());
app.use(morgan("tiny"));

app.use("/auth", authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
(async () => {
	await connect(process.env.MONGO_URI!);
	app.listen(PORT, () =>
		console.log(`App is running on http://localhost:${PORT}`),
	);
})();

export default app;
