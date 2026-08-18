import { Response } from "miragejs";

export const getCarousels = function () {
	return new Response(200, {}, { carousels: this.db.carousels });
};

export const getCarousel = function (schema, request) {
	const carouselId = request.params.carouselId;

	try {
		const carousel = schema.carousels.findBy({ _id: carouselId });
		return new Response(200, {}, { carousel });
	} catch (error) {
		return new Response(500, {}, { error });
	}
};
