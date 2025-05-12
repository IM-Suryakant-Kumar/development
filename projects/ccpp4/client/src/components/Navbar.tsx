import { MdOutlineLogout, MdSearch } from "react-icons/md";
import { TfiPencilAlt2 } from "react-icons/tfi";
import { Link } from "react-router";

export const Navbar = () => {
	return (
		<article className="bg-secondary w-full h-15 fixed top-0 flex items-center">
			<section className="wrapper">
				<article className="flex justify-between items-center gap-2">
					<Link className="flex items-center" to="/note">
						<TfiPencilAlt2 className="fill-logo w-5 md:w-6 h-5 md:h-6" />
						<h1 className="text-logo font-secondary text-lg md:text-2xl font-semibold">
							ClenchSnap
						</h1>
					</Link>
					<section className="ml-auto md:ml-0 flex items-center w-[40%] max-w-md h-6 md:h-7 bg-white rounded-xs overflow-hidden">
						<input
							className="w-[calc(100%-24px)] outline-0 px-3 pt-1 text-xs md:text-sm"
							type="text"
							placeholder="Search..."
						/>
						<div className="w-7 h-full bg-logo flex justify-center items-center">
							<MdSearch className="fill-primary" />
						</div>
					</section>
					<section className="flex items-center">
						<MdOutlineLogout className="w-7 md:w-8 h-7 md:h-8 fill-logo cursor-pointer" />
					</section>
				</article>
			</section>
		</article>
	);
};
