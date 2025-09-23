import { Outlet } from "react-router";

export const Layout = () => {
	return (
		<>
			<header></header>
			<aside></aside>
			<div className="">
				<Outlet />
			</div>
		</>
	);
};
