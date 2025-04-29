import { Router } from "express";
import {
	getUsers,
	createFollowing,
	deleteFollowing,
  updateUser,
} from "../controllers";

const router = Router();

router.route("/").get(getUsers);
router.route("/me").patch(updateUser);
router.route("/following/:userId").patch(createFollowing).delete(deleteFollowing);

export const userRouter = router;
