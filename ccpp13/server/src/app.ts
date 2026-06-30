import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

(async () => {
	try {
		app.listen(PORT, () => {
			console.log(`Server is running on  http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error("Error starting server:", error);
	}
})();

export default app;
