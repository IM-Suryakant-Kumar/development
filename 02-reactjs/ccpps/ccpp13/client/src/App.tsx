import { useEffect, useRef, useState } from "react";
import { connectWS } from "./ws";

function App() {
	const [userName, setUserName] = useState("");
	const socket = useRef(null);

	const handleNameSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (userName) {
			socket.current.emit("joinRoom", userName);
		}
	};

	useEffect(() => {
		socket.current = connectWS();

		socket.current.on("connect", () => {});
	}, []);

	return (
		<>
			{userName ? (
				<div>
					<h1>Welcome, {userName}</h1>
				</div>
			) : (
				<form onSubmit={handleNameSubmit}>
					<input
						type="text"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						placeholder="Enter your name"
					/>
					<button>Join Room</button>
				</form>
			)}
		</>
	);
}

export default App;
