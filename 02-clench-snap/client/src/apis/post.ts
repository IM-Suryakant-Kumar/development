import { toast } from "react-toastify";
import axios from "./axios";
import { asyncWrapper, getTokenFromLocalStorage } from "../utils";
import { IApiRes, IPost } from "../types";

export const createPost = (post: IPost) =>
	asyncWrapper(async () => {
		const { data } = (await axios.post("/post", post, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})) as IApiRes;
		toast.success(data.message);
		return data;
	});

export const getPosts = () =>
	asyncWrapper(async () => {
		const { data } = (await axios.get("/post", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})) as IApiRes;
		return data;
	});

export const updatePost = (id: string, post: IPost) =>
	asyncWrapper(async () => {
		const { data } = (await axios.patch(`/post/${id}`, post, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})) as IApiRes;
		return data;
	});

export const deletePost = (id: string) =>
	asyncWrapper(async () => {
		const { data } = (await axios.delete(`/post/${id}`, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})) as IApiRes;
		toast.success(data.message);
		return data;
	});
