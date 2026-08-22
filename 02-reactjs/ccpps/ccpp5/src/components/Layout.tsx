import { Outlet } from "react-router";
import Navbar from "./Navbar";
import ThemeProvider from "../contexts/Theme";

const Layout = () => {
	return (
		<ThemeProvider>
			<Navbar />
			<Outlet />
		</ThemeProvider>
	);
};

export default Layout;
