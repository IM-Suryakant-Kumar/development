import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/auhutils";
import { Response } from "miragejs";
import jwt_decode from "jwt-decode";
import sign from "jwt-encode";

export const signup = function (schema, request) {
	const { email, password, ...rest } = JSON.parse(request.requestBody);

	try {
		const user = schema.users.findBy({ email });
		if (user) {
			return new Response(
				422,
				{},
				{ errors: ["Unprocessable Entity. Email Already Exists"] }
			);
		}

		const _id = uuid();
		const newUser = {
			_id,
			email,
			password,
			createdAt: formatDate(),
			updatedAt: formatDate(),
			...rest,
			cart: [],
			wishlist: [],
			orders: [],
			addressList: [],
		};
		const createUser = schema.users.create(newUser);
		const encodedToken = sign(
			{ _id, email },
			import.meta.env.VITE_APP_JWT_SECRET
		);
		return new Response(201, {}, { createUser, encodedToken });
	} catch (error) {
		return new Response(500, {}, { error });
	}
};

export const login = function (schema, request) {
	const { email, password } = JSON.parse(request.requestBody);

	try {
		const user = schema.users.findBy({ email });
		if (!user) {
			return new Response(
				404,
				{},
				{ errors: ["The email you entered is not registered. Not found error"] }
			);
		}
		if (password === user.password) {
			const encodedToken = sign(
				{ _id: user._id, email },
				import.meta.env.VITE_APP_JWT_SECRET
			);
			user.password = undefined;
			return new Response(200, {}, { user, encodedToken });
		}
		return new Response(
			401,
			{},
			{
				errors: [
					"The credentials you entered are invalid. Unauthorized access error",
				],
			}
		);
	} catch (error) {
		return new Response(500, {}, { error });
	}
};

export const verifyUser = function (schema, request) {
	const { encodedToken } = JSON.parse(request.requestBody);
	const decodedToken = jwt_decode(
		encodedToken,
		import.meta.env.VITE_APP_JWT_SECRET
	);
	try {
		if (decodedToken) {
			const user = this.db.users.findBy({ email: decodedToken.email });
			if (user) return new Response(200, {}, { user });
		}
		return new Response(
			401,
			{},
			{ errors: ["This token is invalid. Uauthorized access error"] }
		);
	} catch (error) {
		return new Response(500, {}, { error });
	}
};
