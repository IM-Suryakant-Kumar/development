import { Server, RestSerializer, Model } from "miragejs";
import { v4 as uuid } from "uuid";
import { products } from "./backend/db/products";
import { users } from "./backend/db/users";
import { categories } from "./backend/db/categories";
import { carousels } from "./backend/db/carousels";
import { signup } from "./backend/controllers/auth";

export function makeServer({ enviroment = "development" } = {}) {
	return new Server({
		serializers: {
			application: RestSerializer,
		},
		enviroment,
		models: {
			products: Model,
			category: Model,
			user: Model,
			cart: Model,
			wislist: Model,
			carousel: Model,
			address: Model,
			orders: Model,
		},

		// Runs on the start of the server
		seeds(server) {
			// disabling console logs from mirage
			server.logging = false;
			products.forEach((item) => server.create("product", { ...item }));

			users.forEach((item) =>
				server.create("user", {
					...item,
					cart: [],
					wishlist: [],
					addressList: [
						{
							_id: uuid,
							firstName: "Coding",
							lastName: "Clench",
							street: "Street No 3",
							city: "Sonepur",
							state: "bihar",
							country: "India",
							pincode: "841101",
							phone: "1234567890",
						},
					],
					orders: [],
				})
			);

      categories.forEach(item => server.create("category", {...item}))
      carousels.forEach(item => server.create("carousel", {...item}))
		},

		routes() {
			this.namespace = "api";
			// auth routes (public)
      this.post("auth/signup", signup.bind(this));

			// products routes (public)

			// carousels routes (public)

			// categories routes (public)

			// cart routes (private)

			// wishlist routes (private)

			// addresses routes (private)
		},
	});
}
