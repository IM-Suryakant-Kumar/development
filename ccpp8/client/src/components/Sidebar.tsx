import { NavLink } from "react-router";

export const Sidebar = () => {
	return (
		<div className="w-full h-15 fixed left-0 bottom-0 border-t border-gray-300 flex justify-between items-center gap-2 p-4 md:w-60 md:h-[calc(100%-60px)] md:flex-col md:justify-start md:items-start md:pl-20 md:border-t-0 md:border-r">
			<NavLink
				className="hover:bg-gray-300 rounded-full text-xl md:px-4 md:py-2"
				to="/"
			>
				Home
			</NavLink>
			<NavLink
				className="hover:bg-gray-300 rounded-full text-xl md:px-4 md:py-2"
				to="/archive"
			>
				Archive
			</NavLink>
			<NavLink
				className="hover:bg-gray-300 rounded-full text-xl md:px-4 md:py-2"
				to="/trash"
			>
				Trash
			</NavLink>
		</div>
	);
};
