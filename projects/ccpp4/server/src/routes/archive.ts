import { Router } from "express";
import { createArchive, deleteArchive, restoreArchive } from "../controllers";

const router = Router();

router.route("/:noteId").post(createArchive).patch(restoreArchive).delete(deleteArchive);

export const archiveRouter = router;
