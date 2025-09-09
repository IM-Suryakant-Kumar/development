import { Response } from "miragejs";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

export const requiresAuth = function (request) {
	const encodedToken = request.requestHeaders.authorization;
	const decodedToken = jwt_decode(
		encodedToken,
		import.meta.env.VITE_APP_JWT_SECRET
	);
	if (decodedToken) {
		const user = this.db.users.findBy({ email: decodedToken.email });
		if (user) {
			return user._id;
		}
	}
	return new Response(
		401,
		{},
		{ errors: ["the token in invalid. Unauthorized access error."] }
	);
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
