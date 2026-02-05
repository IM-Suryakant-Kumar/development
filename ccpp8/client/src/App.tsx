import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthLayout, HostLayout, Layout } from "./components";
import { Archive, Home, Login, NotFound, Signup, Trash } from "./pages";

const App = () => {
	const router = createBrowserRouter([
		{
			Component: Layout,
			children: [
				{
					Component: HostLayout,
					children: [
						{ path: "/", Component: Home },
						{ path: "/archive", Component: Archive },
						{ path: "/trash", Component: Trash },
					],
				},
				{
					Component: AuthLayout,
					children: [
						{ path: "/login", Component: Login },
						{ path: "/signup", Component: Signup },
					],
				},
			],
		},
		{ path: "*", Component: NotFound },
	]);

	return <RouterProvider router={router} />;
};

export default App;
