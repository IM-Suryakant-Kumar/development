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
	products: IProduct[];
	carts: ICart[];
}

interface Action {
	type: "GET_PRODUCTS" | "ADD_TO_CART" | "REMOVE_FROM_CART" | "CHANGE_CART_QTY";
	payload: ICart;
}

interface AppContext {
  state: State;
  
}
