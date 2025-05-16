import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthLayout, HostLayout, Layout } from "./components";
import { Explore, Home, Landing, LikedPosts, Login, NotFound, Profile, ProfilePosts, SavedPosts, Settings, Signup } from "./pages";

function App() {
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
						{
							Component: Profile,
							children: [
								{ path: "profile/:username/posts", Component: ProfilePosts },
								{ path: "profile/:username/liked", Component: LikedPosts },
								{ path: "profile/:username/saved", Component: SavedPosts },
							],
						},
						{ path: "settings", Component: Settings },
					],
				},
				{
					Component: AuthLayout,
					children: [
						{ path: "login", Component: Login },
						{ path: "signup", Component: Signup },
					],
				},
			],
		},
		{ path: "*", Component: NotFound },
	]);
	return <RouterProvider router={router} />;
}
export default App;
