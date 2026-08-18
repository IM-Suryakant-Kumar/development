import "dotenv/config";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const PORT = process.env.PORT;

const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: { origin: "*" },
});

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

const ROOM = "group";

io.on("connection", (socket) => {
	console.log("A user connected", socket.id);

	socket.on("joinRoom", async (userName) => {
		console.log(`${userName} is joining the room`);

		await socket.join(ROOM);
	});
});

(async () => {
	try {
		server.listen(PORT, () => {
			console.log(`Server is running on  http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error("Error starting server:", error);
	}
})();

export default app;
