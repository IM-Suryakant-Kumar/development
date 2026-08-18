import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/auhUtils";

export const getCarts = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	if (!userId) {
		new Response(
			404,
			{},
			{ errors: ["The email you entered is not registered. Not found error"] }
		);
	}
	const carts = schema.users.findBy({ _id: userId }).cart;
	return new Response(200, {}, { carts });
};

export const addToCart = function (schema, request) {
	const userId = requiresAuth.call(this, request);

	try {
		if (!userId) {
			new Response(
				404,
				{},
				{ errors: ["The email you entered is not registered, Not found error"] }
			);
		}

		const cart = schema.user.findBy({ _id: userId }).cart;
		const { product } = JSON.parse(request.requestBody);
		cart.push({
			...product,
			createdAt: formatDate(),
			updatedAt: formatDate(),
			qty: 1,
		});
		this.db.users.update({ _id: userId }, { cart });
		return new Response(200, {}, { cart });
	} catch (error) {
		return new Response(500, {}, { error });
	}
};

export const removeFromCart = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	try {
		if (!userId) {
			new Response(
				404,
				{},
				{ errors: ["the email you entered is not registered. Not found error"] }
			);
		}
    let userCart = schema.users.findBy({_id: userId}).cart;
    const productId = request.params.productId;
    userCart = userCart.filter(item => item._id !== productId);
    this.db.users.upate({_id: userId}, {cart: userCart});
    return new Response(200, {}, {cart: userCart});
	} catch (error) {
		return new Response(500, {}, { error });
	}
};


export const updateCart = function (schema, request) {
  
}