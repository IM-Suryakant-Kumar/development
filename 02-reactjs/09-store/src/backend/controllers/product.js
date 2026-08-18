import { Response } from "miragejs";

export const getProducts = function () {
	return new Response(200, {}, { products: this.db.products });
};

export const getProduct = function (schema, request) {
	const productId = request.params.productId;
	try {
		const product = schema.products.findBy({ _id: productId });
		return new Response(200, {}, { product });
	} catch (error) {
		return new Response(500, {}, { error });
	}
};
