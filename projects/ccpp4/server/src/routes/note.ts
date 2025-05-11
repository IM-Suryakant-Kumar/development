import { Router } from "express";
import { createNote, deleteNote, updateNote } from "../controllers";

const router = Router();

router.route("/").post(createNote);
router.route("/:noteId").patch(updateNote).delete(deleteNote);

export const noteRouter = router;
