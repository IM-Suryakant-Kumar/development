import { Navigate, Outlet, useLocation } from "react-router";
import { useGetProfileQuery } from "../features/apis";
import { Header, Sidebar } from ".";

export const HostLayout = () => {
	const { isLoading, isSuccess } = useGetProfileQuery();
	const pathname = useLocation().pathname;

	return isLoading ? (
		<h1>Loading...</h1>
	) : isSuccess ? (
		<>
			<Header />
			<Sidebar />
			<div className="p-4 mt-22 md:mt-15">
				<Outlet />
			</div>
		</>
	) : (
		<Navigate to="/login" state={{ redirectTo: pathname }} replace />
	);
};
