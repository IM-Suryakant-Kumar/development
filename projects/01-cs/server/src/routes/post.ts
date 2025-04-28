import { Router } from "express";
import { createPost, deletePost, getPost, getPosts, updatePost } from "../controllers";

const router = Router();

router.route("/").post(createPost).get(getPosts);
router.route("/:postId").get(getPost).patch(updatePost).delete(deletePost);

export const postRouter = router;
