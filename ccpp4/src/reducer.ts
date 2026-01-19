export const initialState: State = {
	products: [],
	carts: [],
};

export const cartReducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "GET_PRODUCTS":
			return { ...state, products: action.payload.products };
		case "ADD_TO_CART":
			return { ...state, carts: [...state.carts, { ...action.payload.cart! }] };
		case "REMOVE_FROM_CART":
			return {
				...state,
				carts: state.carts.filter((c) => c.id !== action.payload.cart?.id),
			};
		case "CHANGE_CART_QTY":
			return {
				...state,
				carts: state.carts.map((c) =>
					c.id === action.payload.cart?.id
						? { ...c, qty: action.payload.cart?.qty }
						: c,
				),
			};
		default:
			return state;
	}
};
