import { links } from "../utils";
import Menubar from "./Menubar";

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 text-secondary border-b-2 border-secondary/20">
			<nav className="w-full max-w-7xl mx-auto h-15 px-2 flex justify-between items-center">
				<h1 className="text-2xl font-cinzel font-bold">SuryakanT</h1>
				<Menubar />
        <ul className="hidden md:flex items-center gap-4">
          {links.map(({ name, href }) => (
            <li key={href} className="hidden md:inline-block">
              <a
                className="px-4 py-2 text-secondary hover:text-amber-600 text-lg ease-in-out duration-300"
                href={href}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
			</nav>
		</header>
	);
};

export default Header;
