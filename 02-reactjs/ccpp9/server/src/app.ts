import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { connect } from "mongoose";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

(async () => {
	try {
		await connect(process.env.MONGO_URI!);
		app.listen(PORT, () =>
			console.log(`App is running on http://localhost:${PORT}`),
		);
	} catch (error) {
		console.error(error);
	}
})();

export default app;
