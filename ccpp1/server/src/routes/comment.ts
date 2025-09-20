import { Router } from "express";
import { createComment, deleteComment, updateComment } from "../controllers";

const router = Router();

router.route("/").post(createComment);
router.route("/:id").patch(updateComment).delete(deleteComment);

export const commentRouter = router;
