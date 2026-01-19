import {
	createContext,
	useContext,
	useEffect,
	useReducer,
} from "react";
import { cartReducer, initialState } from "./reducer";

const CartContext = createContext<AppContext | null>(null);
export const useCart = () => useContext(CartContext) as AppContext;

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log(state)

	useEffect(() => {
		let ignore = false;

		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => {
				if (!ignore) {
					dispatch({ type: "GET_PRODUCTS", payload: data });
				}
			});

		return () => {
			ignore = true;
		};
	}, []);

	return (
		<CartContext.Provider value={{ state }}>{children}</CartContext.Provider>
	);
};

export default CartContextProvider;
