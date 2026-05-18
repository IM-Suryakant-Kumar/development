import { Model, RestSerializer, Server } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
	return new Server({
		serializers: {
			application: RestSerializer,
		},
		environment,
		models: {
			product: Model,
			category: Model,
			user: Model,
			cart: Model,
			wishlist: Model,
		},
		// Runs on the start of the server
		seeds(server) {
			// disballing console logs from Mirage
			server.logging = false;
		},

		routes() {
			this.namespace = "api";
		},
	});
}
