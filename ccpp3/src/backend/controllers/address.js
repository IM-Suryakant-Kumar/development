import { Response } from "miragejs";
import { v4 as uuid } from "uuid";
import { formatDate, requiresAuth } from "../utils/auth";

export const getAddressList = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	if (!userId) {
		return new Response(404, {}, { errors: ["Invalid Credentials"] });
	}
	const userAddressList = schema.users.findBy({ _id: userId }).addressList;
	return new Response(200, {}, { addressList: userAddressList });
};

export const addAddress = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	try {
		if (!userId) {
			return new Response(404, {}, { errors: ["Invalid credentials"] });
		}
		const userAddressList = schema.users.findBy({ _id: userId }).addressList;
		const { address } = JSON.parse(request.requestBody);
		userAddressList.push({
			...address,
			_id: uuid(),
			createdAt: formatDate(),
			updatedAt: formatDate(),
		});
		this.db.users.update({ _id: userId }, { addressList: userAddressList });
		return new Response(201, {}, { addressList: userAddressList });
	} catch (error) {
		return new Response(500, {}, { error });
	}
};

export const removeAddress = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	try {
		if (!userId) {
			return new Response(404, {}, { errors: ["Invalid credentials!"] });
		}
		let userAddressList = schema.users.findBy({ _id: userId }).addressList;
		const addressId = request.params.addressId;
		userAddressList.filter((item) => item._id !== addressId);
		this.db.users.update({ _id: userId }, { addressList: userAddressList });
		return new Response(200, {}, { addressList: userAddressList });
	} catch (error) {
		return new Response(500, {}, { error });
	}
};

export const updateAddress = function (schema, request) {
	const addressId = request.params.addressId;
	const userId = requiresAuth.call(this, request);
	try {
		if (!userId) {
			return new Response(404, {}, { errors: ["Invalid credentials!"] });
		}
		const userAddressList = schema.users.findBy({ _id: userId }).addressList;
		const {
			address: { name, street, city, state, country, pincode, phone },
		} = JSON.parse(request.requestBody);

		userAddressList.forEach((address) => {
			if (address._id === addressId) {
				address.name = name;
				address.street = street;
				address.city = city;
				address.state = state;
				address.country = country;
				address.pincode = pincode;
				address.phone = phone;
				address.updatedAt = formatDate();
			}
		});
		this.db.users.update({ _id: userId }, { addressList: userAddressList });
	} catch (error) {
		return new Response(500, {}, { error });
	}
};
