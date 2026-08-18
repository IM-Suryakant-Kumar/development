import { Provider } from "react-redux";
import { store } from "../features/store";
import { Outlet } from "react-router";

export const Layout = () => (
	<Provider store={store}>
		<Outlet />
	</Provider>
);
