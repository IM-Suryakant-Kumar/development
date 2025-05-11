import { Router } from "express";
import { createTrash, deleteTrash, restoreTrash } from "../controllers";

const router = Router();

router.route("/:noteId").post(createTrash).patch(restoreTrash).delete(deleteTrash);

export const trashRouter = router;
