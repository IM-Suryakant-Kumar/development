import { addToken, getToken, removeToken } from "../../utils";
import { api } from "../api";

const auth = api.injectEndpoints({
	endpoints: (build) => ({
		getProfile: build.query<SuccessResponse, void>({
			query: () => ({
				url: "/auth/me",
				method: "get",
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}),
			providesTags: ["Auth"],
		}),
		updateProfile: build.mutation<SuccessResponse, IUser>({
			query: (body) => ({
				url: "/auth/me",
				method: "patch",
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
				body,
			}),
			invalidatesTags: (result) => (result ? ["Auth"] : []),
		}),
		signup: build.mutation<SuccessResponse, IUser>({
			query: (body) => ({
				url: "/auth",
				method: "post",
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
				method: "patch",
				body,
			}),
			invalidatesTags: (result) => {
				if (result) addToken(result.token!);
				return result ? ["Auth"] : [];
			},
		}),
		logout: build.mutation<SuccessResponse, IUser>({
			query: (body) => ({
				url: "/auth",
				method: "get",
				body,
			}),
			invalidatesTags: (result) => {
				if (result) removeToken();
				return result ? ["Auth"] : [];
			},
		}),
	}),
});

export const {
	useGetProfileQuery,
	useUpdateProfileMutation,
	useSignupMutation,
	useLoginMutation,
	useLogoutMutation,
} = auth;
