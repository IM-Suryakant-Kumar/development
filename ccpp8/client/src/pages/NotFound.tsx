import { Link } from "react-router";

export const NotFound = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center gap-4 text-center">
			<h1 className="text-gray-600 text-2xl font-semibold">
				404 - PAGE NOT FOUND
			</h1>
			<Link
				to="/"
				className="bg-gray-400 text-white border border-gray-300 rounded px-8 py-1"
			>
				Home
			</Link>
		</div>
	);
};
