import { Navigate, Outlet, useLocation } from "react-router";

export const HostLayout = () => {
	const pathame = useLocation().pathname;
	const user = true;

	return user ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ message: "You Must Login First", redirectTo: pathame }} replace />
	);
};
