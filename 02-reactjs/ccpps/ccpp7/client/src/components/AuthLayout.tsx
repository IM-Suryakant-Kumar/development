import { Navigate, Outlet, useLocation } from "react-router";
import { useGetProfileQuery } from "../features/apis";

export const AuthLayout = () => {
	const { isLoading, isSuccess } = useGetProfileQuery();
	const pathname = useLocation().state?.redirectTo || "/";

	return isLoading ? (
		<h2>Loading...</h2>
	) : isSuccess ? (
		<Navigate to={pathname} replace />
	) : (
		<Outlet />
	);
};
