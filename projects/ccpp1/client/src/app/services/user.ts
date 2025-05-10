import { api } from "./api";
import { User } from "./auth";

export interface UserResponse {
	success: boolean;
	message: string;
	user: User;
	users: User[];
}

const user = api.injectEndpoints({
	endpoints: (build) => ({
		getProfile: build.query<UserResponse, void>({
			query: () => "/user/me",
			providesTags: ["user"],
		}),
		updateProfile: build.mutation<UserResponse, User>({
			query: (user) => ({
				url: "/user/me",
				method: "PATCH",
				body: user,
			}),
			invalidatesTags: (result) => (result ? ["user"] : [{ type: "user", id: "LIST" }]),
		}),
		getUsers: build.query<UserResponse, void>({
			query: () => "user",
			providesTags: ["users"],
		}),
		createFollowing: build.mutation<UserResponse, string>({
			query: (userId: string) => ({
				url: `/user/following/${userId}`,
				method: "PATCH",
			}),
			invalidatesTags: (result) => (result ? ["users"] : [{ type: "users", id: "LIST" }]),
		}),
		deleteFollowing: build.mutation<UserResponse, string>({
			query: (userId: string) => ({
				url: `/user/following/${userId}`,
				method: "DELETE",
			}),
			invalidatesTags: (result) => (result ? ["users"] : [{ type: "users", id: "LIST" }]),
		}),
	}),
});

export const {
	useGetProfileQuery,
	useUpdateProfileMutation,
	useGetUsersQuery,
	useCreateFollowingMutation,
	useDeleteFollowingMutation,
} = user;
