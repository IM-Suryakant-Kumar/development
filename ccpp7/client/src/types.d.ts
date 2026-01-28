interface IUser {
	_id: string;
	name: string;
	email: string;
	password: string;
	bio: string;
	school: string;
	work: string;
	city: string;
	country: string;
}

interface SuccessResponse {
	message?: string;
	token?: string;
	user?: IUser;
}
