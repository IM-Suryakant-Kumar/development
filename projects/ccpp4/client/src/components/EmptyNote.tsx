import { Link, useLocation } from "react-router";

export const EmptyNote = () => {
  const pathname = useLocation().pathname;

	return (
		<article className="h-[calc(100vh-60px)] flex flex-col justify-center items-center gap-4 md:h-[calc(100vh-120px)]">
			{pathname === "/note" && (
				<>
					<p className="text-lg text-gray-600 text-center">
						You don't have any note yet. Create one
					</p>
					<button className="px-6 py-2 bg-logo text-primary font-secondary text-sm font-bold rounded-full">Create One</button>
				</>
			)}
			{pathname === "/archive" && (
        <>
					<p className="text-lg text-gray-600 text-center">
						You don't have any note archived yet. Wanna archive?
					</p>
					<Link to="/note" className="px-6 py-2 bg-logo text-primary font-secondary text-sm font-bold rounded-full">Go to Note</Link>
				</>
      )}
			{pathname === "/trash" && (
        <>
					<p className="text-lg text-gray-600 text-center">
						You don't have any note trashed yet. Wanna trash?
					</p>
					<Link to="/note" className="px-6 py-2 bg-logo text-primary font-secondary text-sm font-bold rounded-full">Go to Note</Link>
				</>
      )}
		</article>
	);
};
