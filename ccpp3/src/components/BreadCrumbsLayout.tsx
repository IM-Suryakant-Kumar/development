import { Link, Outlet, useLocation } from "react-router";

const BreadCrumbsLayout = () => {
	const pathnames = useLocation()
		.pathname.split("/")
		.filter((p) => p);
	console.log(pathnames);
	return (
		<>
			{pathnames.map((p, i) =>
				i === pathnames.length - 1 ? (
					<span> / {p}</span>
				) : (
					<span>
						/ <Link to={`/${p}`} className="hover:text-blue-500">{p}</Link>
					</span>
				),
			)}
			<Outlet />
		</>
	);
};

export default BreadCrumbsLayout;
