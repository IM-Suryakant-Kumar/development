import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import { Response } from "miragejs";

export const requiresAuth = function (request) {
	const encodedToken = request.requestHeaders.authorization;
	const decodedToken = jwt_decode(
		encodedToken,
		import.meta.env.VITE_APP_JWT_SECRET
	);

	if (decodedToken) {
		const user = this.db.users.findBy({ email: decodedToken.email });
    if(user) return user._id;
	}
  return new Response(401, {}, { errors: ["This token is invalid. Unauthorized access error"] })
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
