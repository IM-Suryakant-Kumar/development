export const initialState: State = {
	products: [],
	carts: [],
};

export const cartReducer = (state: State, action: Action) => {
	switch (action.type) {
		case "GET_PRODUCTS":
			return { ...state, products: action.payload };
		case "ADD_TO_CART":
			return { ...state, carts: [...state.carts, action.payload] };
		case "REMOVE_FROM_CART":
			return {
				...state,
				carts: state.carts.filter((c) => c.id !== action.payload.id),
			};
		case "CHANGE_CART_QTY":
			return {
				...state,
				carts: state.carts.map((c) =>
					c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty,
				),
			};
		default:
			return state;
	}
};
