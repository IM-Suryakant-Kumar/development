import { Link } from "react-router";

export const NotFound = () => {
	return (
		<article className="w-[95%] md:w-[95%] min-h-screen flex flex-col justify-center items-center gap-4">
			<h1 className="text-gray-600 text-lg text-center md:text-2xl">
				404 - PAGE NOT FOUND!
			</h1>
			<Link
				className="w-40 h-8 bg-logo text-primary flex justify-center items-center font-secondary font-semibold rounded-xs"
				to="/note"
			>
				Go to Note
			</Link>
		</article>
	);
};
