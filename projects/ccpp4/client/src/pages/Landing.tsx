import { GiPencil } from "react-icons/gi";
import { Link } from "react-router";

export const Landing = () => {
	return (
		<article className="bg-secondary">
			<section className="w-[95%] max-w-[90%] mx-auto min-h-screen flex flex-col justify-center items-center gap-4 md:flex-row md:justify-around">
				<img
					className="w-[90%] md:w-[40%] object-contain md:order-2"
					src="/notebook.svg"
					alt="notebook"
				/>
				<section className="flex flex-col justify-center items-center gap-4 md:order-1">
					<h1 className="text-logo font-secondary text-xl md:text-2xl font-semibold border-l-4 border-r-4 rounded-md px-8">
						ClechKeep
					</h1>
					<GiPencil className="w-10 h-10 fill-logo" />
					<p className="max-w-xs text-gray-600 text-sm sm:text-xl text-center">
						A modern way to Keep and handle your notes digitally
					</p>
					<Link
						className="w-40 h-7 md:w-50 md:h-8 bg-logo text-primary flex justify-center items-center text-xs md:text-sm font-secondary font-bold rounded-xs"
						to="/note"
					>
						Get Started
					</Link>
				</section>
			</section>
		</article>
	);
};
