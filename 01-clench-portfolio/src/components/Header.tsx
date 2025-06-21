import Menubar from "./Menubar";

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 text-secondary border-b-2 border-secondary/20">
			<nav className="w-full max-w-7xl mx-auto h-15 px-2 flex justify-between items-center">
				<h1 className="text-2xl font-cinzel font-bold">SuryakanT</h1>
				<Menubar />
			</nav>
		</header>
	);
};

export default Header;
