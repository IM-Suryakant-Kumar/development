import { Router } from "express";
import {
	getUsers,
	getProfile,
	updateProfile,
	createFollowing,
	deleteFollowing,
} from "../controllers";

const router = Router();

router.route("/").get(getUsers);
router.route("/me").get(getProfile).patch(updateProfile);
router.route("/following/:userId").patch(createFollowing).delete(deleteFollowing);

export const userRouter = router;
