import { AddTokenToLocalStorage, removeTokenFromLocalStorage } from "../../utils";
import { api } from "./api";

interface AuthResponse {
	success: boolean;
	message: string;
	token: string;
}

export interface User {
	name: string;
	username: string;
  email: string;
  password: string;
}

const auth = api.injectEndpoints({
	endpoints: (build) => ({
		signup: build.mutation<AuthResponse, User>({
			query: (user) => ({
				url: "auth/signup",
				method: "POST",
				body: user,
			}),
			invalidatesTags: (result) => {
				if (result) localStorage.setItem("token", result.token);
				return ["user"];
			},
		}),
		login: build.mutation<AuthResponse, User>({
			query: (user) => ({
				url: "auth/login",
				method: "POST",
				body: user,
			}),
			invalidatesTags: (result) => {
				if (result) AddTokenToLocalStorage(result.token);
				return ["user"];
			},
		}),
		guestLogin: build.mutation<AuthResponse, void>({
			query: () => ({
				url: "auth/login",
				method: "GET",
			}),
			invalidatesTags: (result) => {
				if (result) AddTokenToLocalStorage(result.token);
				return ["user"];
			},
		}),
		logout: build.mutation<AuthResponse, void>({
			query: () => ({
				url: "auth/logout",
				method: "GET",
			}),
			invalidatesTags: (result) => {
				if (result) removeTokenFromLocalStorage();
				return ["user"];
			},
		}),
	}),
});

export const { useSignupMutation, useLoginMutation, useGuestLoginMutation, useLogoutMutation } =
	auth;
