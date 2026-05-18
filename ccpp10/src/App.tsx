// import {  } from "jsonwebtoken";
import { sign } from "jsonwebtoken";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		let ignore = false;
		if (!ignore) {
			(async () => {
				const token = sign({ userId: "123", name: "John Doe" }, "secret", {
					expiresIn: "1h",
				});
				console.log(token);
			})();
		}

		return () => {
			ignore = true;
		};
	}, []);
	return <div>App</div>;
};

export default App;
