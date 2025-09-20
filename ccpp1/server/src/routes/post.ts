import { Router } from "express";
import {
	createPost,
	deletePost,
	getAllPosts,
	getPostById,
	updatePost,
} from "../controllers";

const router = Router();

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").get(getPostById).patch(updatePost).delete(deletePost);

export const postRouter = router;
