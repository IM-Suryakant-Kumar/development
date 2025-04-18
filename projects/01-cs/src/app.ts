import "express-async-errors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();

// constant
const PORT = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

async () => {
	try {
		app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
	} catch (error) {
		console.log(error);
	}
};
