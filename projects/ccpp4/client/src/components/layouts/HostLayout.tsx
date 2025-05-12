import { Navigate, Outlet, useLocation } from "react-router";
import { Navbar, Sidebar } from "..";

export const HostLayout = () => {
	const pathame = useLocation().pathname;
	const user = true;

	return user ? (
		<>
			<Navbar />
			<Sidebar />
			<article className="py-15 md:pb-0">
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
