import { Router } from "express";
import { createPost, deletePost, getPosts, updatePost } from "../controllers";

const router = Router();

router.route("/").post(createPost).get(getPosts);
router.route("/:postId").patch(updatePost).delete(deletePost);

export const postRouter = router;
