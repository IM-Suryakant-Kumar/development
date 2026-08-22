import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

const App = () => {
	const router = createBrowserRouter([
		{
			Component: Layout,
			children: [
				{ path: "/", Component: Home },
				{ path: "/about", Component: About },
				{ path: "/blog", Component: Blog },
			],
		},
		{ path: "*", Component: NotFound },
	]);
	return <RouterProvider router={router} />;
};

export default App;
