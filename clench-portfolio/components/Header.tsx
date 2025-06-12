import { links } from "@/lib/data";
import Link from "next/link";
import MenuBar from "./MenuBar";

const Header = () => {
	return (
		<header className="bg-secondary shadow-sm px-2 md:px-4 fixed top-0 left-0 w-full z-50">
			<nav className="w-full max-w-7xl mx-auto h-15 flex justify-between items-center">
				<h1 className="text-logo text-2xl font-secondary font-bold flex items-center gap-2">
					<span className="font-primary font-bold">&lt;/</span> Suryakant{" "}
					<span className="font-primary font-bold">&gt;</span>
				</h1>
				<ul className="hidden md:flex gap-6 ">
					{links.map((link) => (
						<li key={link.hash}>
							<Link
								className="text-gray-800 text-lg font-semibold hover:text-logo ease-in-out duration-300"
								href={link.hash}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
				<MenuBar />
			</nav>
		</header>
	);
};

export default Header;
