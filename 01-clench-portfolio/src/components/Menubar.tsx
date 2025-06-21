import { useState } from "react";
import { links } from "../utils";

const Menubar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => setShowMenu(!showMenu);

	return (
		<>
			<div
				className="md:hidden flex flex-col justify-center items-end gap-1 cursor-pointer"
				onClick={toggleMenu}
			>
				<div
					className={`w-6 h-1 bg-secondary rounded-full ease-in-out duration-300 ${
						showMenu ? "rotate-45 translate-y-2" : ""
					}`}
				/>
				<div
					className={`w-5 h-1 bg-secondary rounded-full ease-in-out duration-300 ${
						showMenu ? "opacity-0" : ""
					}`}
				/>
				<div
					className={`w-6 h-1 bg-secondary rounded-full ease-in-out duration-300 ${
						showMenu ? "-rotate-45 -translate-y-2" : ""
					}`}
				/>
			</div>
			<ul
				className={`md:hidden w-full bg-white fixed top-15 -right-[100vw] ease-in-out duration-300 border-t-2 border-b-2 border-secondary/20 p-4 ${
					showMenu ? "right-0" : ""
				}`}
			>
				{links.map(({ name, href }) => (
					<li key={href}>
						<a
							className="block bg-secondary/10 hover:bg-secondary/80 text-secondary/80 hover:text-primary mt-1 px-2 py-0.5 leading-relaxed rounded-sm"
							href={href}
						>
							{name}
						</a>
					</li>
				))}
			</ul>
		</>
	);
};

export default Menubar;
