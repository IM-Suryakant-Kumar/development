import { Navigate, Outlet, useLocation } from "react-router";
import { Navbar, Sidebar } from "..";

export const HostLayout = () => {
	const pathame = useLocation().pathname;
	const user = true;

	return user ? (
		<>
			<Navbar />
			<Sidebar />
			<article className="my-15 p-4 md:mb-0 md:ml-60">
				<Outlet />
			</article>
		</>
	) : (
		<Navigate
			to="/login"
			state={{ message: "You Must Login First", redirectTo: pathame }}
			replace
		/>
	);
};
