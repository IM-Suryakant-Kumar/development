import { Navigate, Outlet, useLocation } from "react-router";
import { useGetProfileQuery } from "../../app/services/user";

export const AuthLayout = () => {
	const { data } = useGetProfileQuery();
	const pathname = useLocation().state?.redirectTo || "/Home";
	const user = data?.user;

	return user ? <Navigate to={pathname} replace /> : <Outlet />;
};
