import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { AuthLayout, HostLayout, Layout } from "./components";
import { Explore, Home, Login, Post, Profile, Settings, Signup } from "./pages";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<Layout />}>
				<Route path="/" element={<HostLayout />}>
					<Route index element={<Home />} />
					<Route path="explore" element={<Explore />} />
					<Route path="profile" element={<Profile />} />
					<Route path="settings" element={<Settings />} />
					<Route path="post/:postId" element={<Post />} />
				</Route>
				<Route element={<AuthLayout />}>
					<Route path="login" element={<Login />} />
					<Route path="login" element={<Signup />} />
				</Route>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
