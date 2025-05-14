import { BsTrash } from "react-icons/bs";
import { MdOutlineArchive } from "react-icons/md";
import { TfiPencilAlt2 } from "react-icons/tfi";
import { NavLink } from "react-router";

export const Sidebar = () => {
	const links = [
		{ name: "Note", to: "/note", icon: TfiPencilAlt2 },
		{ name: "Archive", to: "/archive", icon: MdOutlineArchive },
		{ name: "Trash", to: "/trash", icon: BsTrash },
	];

	return (
		<article className="bg-secondary border-t w-full h-15 fixed bottom-0 flex items-center md:bg-primary md:border-t-0 md:border-r border-gray-300 md:w-60 md:h-[calc(100%-60px)] md:top-15 md:items-start md:pt-4">
			<section className="wrapper md:ml-0 flex md:flex-col items-center md:items-start justify-between gap-6">
				{links.map((link) => (
					<NavLink
						key={link.name}
						to={link.to}
						className="link w-8 md:w-58 h-8 md:h-12 flex justify-center md:justify-start items-center md:gap-2 md:pl-9 md:rounded-l-none md:rounded-r-xl md:border-0"
					>
						<link.icon className="fill-inherit w-5 md:w-6 h-5 md:h-6" />
						<span className="hidden md:block text-inherit font-secondary font-semibold md:text-lg">{link.name}</span>
					</NavLink>
				))}
			</section>
		</article>
	);
};
