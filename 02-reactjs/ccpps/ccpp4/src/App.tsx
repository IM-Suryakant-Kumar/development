import Carts from "./components/Carts";
import Products from "./components/Products";
import CartContextProvider from "./context";

const App = () => {
	return (
		<CartContextProvider>
			<Products />
			<Carts />
		</CartContextProvider>
	);
};

export default App;
