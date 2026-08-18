interface IProduct {
	id: string;
	title: string;
	thumbnail: string;
	price: string;
}

interface ICart extends IProduct {
	qty: number;
}

interface State {
	products?: IProduct[];
	carts?: ICart[];
	cart?: ICart;
}

interface Action {
	type: "GET_PRODUCTS" | "ADD_TO_CART" | "REMOVE_FROM_CART" | "CHANGE_CART_QTY";
	payload: State;
}

interface AppContext {
	state: State;
	addToCart(cart: ICart): void;
	removeFromCart(cart: ICart): void;
	changeCartQTY(cart: ICart): void;
}
