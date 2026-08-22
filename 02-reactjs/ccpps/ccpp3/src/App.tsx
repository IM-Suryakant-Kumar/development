import {
	createBrowserRouter,
	RouterProvider,
} from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import BreadCrumbsLayout from "./components/BreadCrumbsLayout";
import NotFound from "./pages/NotFound";

const App = () => {
	const router = createBrowserRouter([
		{ path: "/", Component: Home },
		{
			Component: BreadCrumbsLayout,
			children: [
				{ path: "/products", Component: Products },
				{ path: "/products/:id", Component: Product },
			],
		},
		{ path: "/", Component: NotFound },
	]);

	return <RouterProvider router={router} />;
};

export default App;
