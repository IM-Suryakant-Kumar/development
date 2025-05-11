import { GiPencil } from "react-icons/gi";
import { Link } from "react-router";

export const Landing = () => {
	return (
		<article className="bg-secondary">
			<section className="w-[95%] max-w-[90%] mx-auto min-h-screen flex flex-col justify-center items-center gap-6 md:flex-row md:justify-around text-center">
				<section className="flex justify-center items-center gap-4 md:order-2">
					<img
						className="object-contain md:w-xl"
						src="/notebook.svg"
						alt="notebook"
						width={400}
						height={400}
					/>
				</section>
				<section className="flex flex-col justify-center items-center gap-4 md:order-1">
					<h1 className="text-logo font-secondary text-2xl font-semibold border-l-4 border-r-4 rounded-md px-8">
						ClechKeep
					</h1>
					<GiPencil className="fill-logo" size="2em" />
					<p className="max-w-xs text-gray-600 text-lg">
						A modern way to Keep and handle your notes digitally
					</p>
					<Link
						className="w-40 h-8 bg-logo text-primary flex justify-center items-center text-sm font-secondary font-bold rounded-xs"
						to="/note"
					>
						Get Started
					</Link>
				</section>
			</section>
		</article>
	);
};
