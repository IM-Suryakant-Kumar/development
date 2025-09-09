import { Model, RestSerializer, Server } from "miragejs";
import { v4 as uuid } from "uuid";
import { products } from "./backend/db/products";
import { users } from "./backend/db/users";
import { categories } from "./backend/db/categories";
import { carousels } from "./backend/db/carousels";
import {
	loginHandler,
	signupHandler,
	verifyUser,
} from "./backend/controllers/auth";
import { getAllProducts, getProduct } from "./backend/controllers/product";
import { getCarousel, getCarousels } from "./backend/controllers/carousel";
import { getCategories, getCategory } from "./backend/controllers/category";
import {
	addToCart,
	clearCart,
	getcarts,
	removeFromCart,
	updateCart,
} from "./backend/controllers/cart";
import {
	addToWishlist,
	getWishlists,
	removeFromWishlist,
} from "./backend/controllers/wishlist";
import {
	addAddress,
	getAddressList,
	removeAddress,
	updateAddress,
} from "./backend/controllers/address";

export function makeServer({ enviroment = "development" } = {}) {
	return new Server({
		serializers: {
			application: RestSerializer,
		},
		enviroment,
		models: {
			product: Model,
			category: Model,
			user: Model,
			cart: Model,
			wishlist: Model,
			carousel: Model,
			adderss: Model,
			orders: Model,
		},

		seeds(server) {
			server.logging = false;
			products.forEach((item) => server.create("product", { ...item }));

			users.forEach((item) =>
				server.create("user", {
					...item,
					cart: [],
					wishlist: [],
					address: [
						{
							_id: uuid(),
							firstname: "sujeet",
							lastname: "kumar",
							street: "street No 3",
							city: "Patna",
							country: "India",
							pincode: "800000",
							phone: "1234567890",
						},
					],
					orders: [],
				})
			);

			categories.forEach((item) => server.create("category", { ...item }));
			carousels.forEach((item) => server.create("carousel", { ...item }));
		},

		routes() {
			this.namespace = "api";
			// auth routes public
			this.post("/auth/signup", signupHandler.bind(this));
			this.post("/auth/login", loginHandler.bind(this));
			this.post("/auth/verify", verifyUser.bind(this));

			// products routes public
			this.get("/products", getAllProducts.bind(this));
			this.get("/products/:productId", getProduct.bind(this));

			//carousel routes public
			this.get("/carousels", getCarousels.bind(this));
			this.get("/carousels/:caru=ouselId", getCarousel.bind(this));

			// categories routes public
			this.get("/categories", getCategories.bind(this));
			this.get("/categories/categoryId", getCategory.bind(this));

			// cart routes private
			this.get("/user/cart", getcarts.bind(this));
			this.post("/user/cart", addToCart.bind(this));
			this.post("/user/cart/:productId", updateCart.bind(this));
			this.delete("/user/cart/:productId", removeFromCart.bind(this));
			this.delete("/user/cart/all", clearCart.bind(this));

			// wishlist routes private
			this.get("/user/wishlist", getWishlists.bind(this));
			this.post("/user/wishlist", addToWishlist.bind(this));
			this.delet("/user/wishlist/:productId", removeFromWishlist.bind(this));

			// addressList routes private
			this.get("/user/address", getAddressList.bind(this));
			this.post("/user/address", addAddress.bind(this));
			this.post("/user/address/:addressId", updateAddress.bind(this));
			this.delete("/user/address/:addressId", removeAddress.bind(this));
		},
	});
}
