import { Provider } from "react-redux";
import { Outlet } from "react-router";
import { store } from "../features/store";

export const Layout = () => (
	<Provider store={store}>
		<Outlet />
	</Provider>
);
