import { addToken, getToken, removeToken } from "../../utils";
import { api } from "../api";

export const auth = api.injectEndpoints({
	endpoints: (build) => ({
		signup: build.mutation<SuccessResponse, IUser>({
			query: (body) => ({
				url: "/auth",
				method: "POST",
				body,
			}),
			invalidatesTags: (result) => {
				if (result) addToken(result.token!);
				return result ? ["Auth"] : [];
			},
		}),
		login: build.mutation<SuccessResponse, IUser>({
			query: (body) => ({
				url: "/auth",
				method: "PATCH",
				body,
			}),
			invalidatesTags: (result) => {
				if (result) addToken(result.token!);
				return result ? ["Auth"] : [];
			},
		}),
		logout: build.mutation<SuccessResponse, void>({
			query: () => ({
				url: "/auth",
				method: "GET",
			}),
			invalidatesTags: (result) => {
				if (result) removeToken();
				return result ? ["Auth"] : [];
			},
		}),
		getProfile: build.query<SuccessResponse, void>({
			query: () => ({
				url: "/auth/me",
				method: "GET",
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}),
			providesTags: ["Auth"],
		}),
		updateProfile: build.mutation<SuccessResponse, IUser>({
			query: (body) => ({
				url: "/auth/me",
				method: "PATCH",
				body,
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}),
			invalidatesTags: (result) => (result ? ["Auth"] : []),
		}),
	}),
});

export const {
	useSignupMutation,
	useLoginMutation,
	useLogoutMutation,
	useGetProfileQuery,
	useUpdateProfileMutation,
} = auth;
