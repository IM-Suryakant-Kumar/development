import { BsTrash } from "react-icons/bs";
import { MdOutlineArchive } from "react-icons/md";
import { TfiPencilAlt2 } from "react-icons/tfi";
import { NavLink } from "react-router";

export const Sidebar = () => {
	return (
		<article className="bg-secondary w-full md:w-60 h-15 md:h-full fixed bottom-0 md:top-15 flex items-center md:items-start md:pt-6">
			<section className="wrapper md:ml-0 flex md:flex-col items-center md:items-start justify-between gap-2">
				<NavLink
					to="/note"
					className="link w-8 md:w-[90%] h-8 md:h-9 flex justify-center md:justify-start items-center md:gap-2 md:pl-9 md:rounded-l-none md:rounded-r-xl md:border-0"
				>
					<TfiPencilAlt2 className="fill-inherit w-5 md:w-6 h-5 md:h-6" />
					<span className="hidden md:block text-inherit md:text-xl">Note</span>
				</NavLink>
				<NavLink
					to="/archive"
					className="link w-8 md:w-[90%] h-8 md:h-9 flex justify-center md:justify-start items-center md:gap-2 md:pl-9 md:rounded-l-none md:rounded-r-xl md:border-0"
				>
					<MdOutlineArchive className="fill-inherit w-5 md:w-6 h-5 md:h-6" />
					<span className="hidden md:block text-inherit md:text-xl">Archive</span>
				</NavLink>
				<NavLink
					to="/trash"
					className="link w-8 md:w-[90%] h-8 md:h-9 flex justify-center md:justify-start items-center md:gap-2 md:pl-9 md:rounded-l-none md:rounded-r-xl md:border-0"
				>
					<BsTrash className="fill-inherit w-5 md:w-6 h-5 md:h-6" />
					<span className="hidden md:block text-inherit md:text-xl">Trash</span>
				</NavLink>
			</section>
		</article>
	);
};
