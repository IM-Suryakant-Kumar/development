import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/auhutils";

export const users = [
	{
		_id: uuid(),
		firstName: "Coding",
		lastName: "Clench",
		email: "codingclench@gmail.com",
		password: "codingclench",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
