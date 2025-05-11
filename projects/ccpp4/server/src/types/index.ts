export interface IUser {
	name: string;
	email: string;
	password: string;
	notes: INote[];
	archives: INote[];
	trashes: INote[];
}

export interface INote {
	author: IUser;
	title: string;
	content: string;
	background: string;
	label: string;
}
