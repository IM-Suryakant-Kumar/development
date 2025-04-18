import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { errorHandleMiddleware, notFoundMiddleware } from "./middlewares";

const app = express();

// constant
const PORT = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({ origin: "*", credentials: true }));
app.use(morgan("tiny"));

// error handler
app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);
(async () => {
  app.listen(PORT, () => console.log(`App is running at http://localhost:${PORT}`));
	try {
	} catch (error) {
		console.log(error);
	}
})();
