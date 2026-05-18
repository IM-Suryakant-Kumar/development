import { Model, RestSerializer, Server } from "miragejs";

export const makeServer = ({ environment = "test" } = {}) => {
	return new Server({
		serializers: {
			application: RestSerializer,
		},

		environment,

		models: {
			user: Model,
		},

		seeds(server) {
			server.create("user", { name: "Bob" });
			server.create("user", { name: "Alice" });
		},

    routes() {
      this.namespace = "api";
      this.get("/users", (schema) => {
        return schema.users.all();
      });
    }
	});
};
