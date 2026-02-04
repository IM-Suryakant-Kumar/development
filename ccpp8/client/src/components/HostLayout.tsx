import { Navigate, Outlet, useLocation } from "react-router";
import { useGetProfileQuery } from "../features/apis";

export const HostLayout = () => {
	const { isLoading, isSuccess } = useGetProfileQuery();
	const pathname = useLocation().pathname;

	return isLoading ? (
		<h1>Loading...</h1>
	) : isSuccess ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ redirectTo: pathname }} replace />
	);
};
