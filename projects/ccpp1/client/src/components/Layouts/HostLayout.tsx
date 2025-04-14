import { Navigate, Outlet, useLocation } from "react-router";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const HostLayout = () => {
	const pathname = useLocation().pathname;
	const user = true;

	return user ? (
    <>
      <Navbar />
		  <Outlet />
      <Sidebar />
    </>
	) : (
		<Navigate
			to="/login"
			state={{ message: "You Must Login First", redirectTo: pathname }}
			replace
		/>
	);
};

export default HostLayout;
