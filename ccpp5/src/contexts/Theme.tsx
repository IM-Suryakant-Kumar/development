import { createContext, useContext, useEffect, useState } from "react";

interface AppContext {
	theme: "dark" | "light";
	toggleTheme(): void;
}

const ThemeContext = createContext<AppContext | null>(null);
export const useTheme = () => useContext(ThemeContext) as AppContext;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode((prevState) => !prevState);
	};

	const theme = isDarkMode ? "dark" : "light";

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
