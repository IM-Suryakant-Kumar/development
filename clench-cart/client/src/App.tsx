import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthLayout, HostLayout, Layout } from "./components";
import {
	Cart,
	Home,
	Login,
	NotFound,
	Orders,
	Product,
	Products,
	Signup,
	Wishlist,
} from "./pages";

const App = () => {
	const router = createBrowserRouter([
		{
			Component: Layout,
			children: [
				{
					Component: HostLayout,
					children: [
						{ path: "/", Component: Home },
						{ path: "product", Component: Products },
						{ path: "product:productId", Component: Product },
						{ path: "cart", Component: Cart },
						{ path: "wishlist", Component: Wishlist },
						{ path: "orders", Component: Orders },
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
};

export default App;
