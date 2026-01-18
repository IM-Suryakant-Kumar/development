import { Link, Outlet, useLocation } from "react-router";

const BreadCrumbsLayout = () => {
	const pathnames = useLocation()
		.pathname.split("/")
		.filter((p) => p);
	console.log(pathnames);
	return (
		<>
			
			<Outlet />
		</>
	);
};

export default BreadCrumbsLayout;
