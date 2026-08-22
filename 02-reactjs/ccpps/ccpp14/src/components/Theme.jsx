import { useState } from "react";
import { getTheme } from "../utils/theme.js";

const Theme = () => {
	const [theme, setTheme] = useState(() => getTheme());

	const switchTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<>
			<p>Current Theme: {theme}</p>
			<button onClick={switchTheme}>Switch Theme</button>
		</>
	);
};

export default Theme;
