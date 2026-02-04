interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
}

interface SuccessResponse {
  user?: IUser;
  message?: string;
  token?: string;
}