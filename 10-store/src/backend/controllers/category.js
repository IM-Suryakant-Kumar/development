import { Response } from "miragejs";

export const getCategories = function () {
	try {
		return new Response(200, {}, { categories: this.db.categories });
	} catch (error) {
		return new Response(500, {}, { error });
	}
};

export const getCategory = function (schema, request) {
	const categoryId = request.params.categoryId;
	try {
		const category = schema.categories.findBy({ _id: categoryId });
		return new Response(200, {}, { category });
	} catch (error) {
		return new Response(500, {}, { error });
	}
};
