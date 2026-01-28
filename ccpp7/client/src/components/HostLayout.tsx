import { Navigate, Outlet, useLocation } from "react-router";
import { useGetProfileQuery } from "../features/apis";

export const HostLayout = () => {
	const { isLoading, isSuccess } = useGetProfileQuery();
	const pathname = useLocation().pathname;

	return isLoading ? (
		<h2>Loading...</h2>
	) : isSuccess ? (
		<Outlet />
	) : (
		<Navigate
			to="/login"
			state={{ message: "You must login first", redirectTo: pathname }}
			replace
		/>
	);
};
