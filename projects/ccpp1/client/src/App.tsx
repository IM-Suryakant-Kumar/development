import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthLayout, HostLayout, Layout } from "./components";
import { Explore, Home, Landing, Login, NotFound, Profile, Setting, Signup } from "./pages";

const App = () => {
	const router = createBrowserRouter([
		{
			Component: Layout,
			children: [
				{ path: "/", Component: Landing },
				{
					Component: HostLayout,
					children: [
						{ path: "home", Component: Home },
						{ path: "explore", Component: Explore },
						{ path: "Profile/:username", Component: Profile },
						{ path: "settings", Component: Setting },
					],
				},
				{
					Component: AuthLayout,
					children: [
						{ path: "login", Component: Login },
						{ path: "signup", Component: Signup },
					],
				},
				{ path: "*", Component: NotFound },
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
