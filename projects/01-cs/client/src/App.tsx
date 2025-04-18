import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthLayout, HostLayout, Layout } from "./components";
import {
	Explore,
	Home,
	Landing,
	LikedPosts,
	Login,
	NotFound,
	Posts,
	Profile,
	SavedPosts,
	Setting,
	Signup,
} from "./pages";

const App = () => {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{ path: "/", element: <Landing /> },
				{
					element: <HostLayout />,
					children: [
						{ path: "home", element: <Home /> },
						{ path: "explore", element: <Explore /> },
						{
              element: <Profile />,
							children: [
								{ path: "profile", element: <Posts /> },
								{ path: "liked", element: <LikedPosts /> },
								{ path: "saved", element: <SavedPosts /> },
							],
						},
            { path: "setting", element: <Setting /> },
					],
				},
				{
					element: <AuthLayout />,
					children: [
						{ path: "login", element: <Login /> },
						{ path: "signup", element: <Signup /> },
					],
				},
				{ path: "*", element: <NotFound /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
