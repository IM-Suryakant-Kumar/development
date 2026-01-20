import { NavLink } from "react-router";
import { useTheme } from "../contexts/Theme";

const Navbar = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<nav className="flex justify-between items-center p-4">
			<div className="flex-4 flex gap-4 justify-center items-center">
				<NavLink className="" to="/">Home</NavLink>
				<NavLink className="" to="/about">About</NavLink>
				<NavLink className="" to="/blog">Blog</NavLink>
			</div>
			<div className="flex-1">
				<label htmlFor="">
					<input
						type="checkbox"
						onChange={toggleTheme}
						checked={theme === "dark"}
					/>
				</label>
			</div>
		</nav>
	);
};

export default Navbar;
