import { Router } from "express";
import {
	followUser,
	getUserProfile,
	likesPost,
	savesPost,
	unfollowUser,
	unlikesPost,
	unsavesPost,
	updateUserProfile,
} from "../controllers";

const router = Router();

router.route("/profile").get(getUserProfile).patch(updateUserProfile);
router.route("/follow/:id").patch(followUser);
router.route("/unfollow/:id").patch(unfollowUser);
router.route("/likes/:id").patch(likesPost);
router.route("/unlikes/:id").patch(unlikesPost);
router.route("/saves/:id").patch(savesPost);
router.route("/unsaves/:id").patch(unsavesPost);

export const userRouter = router;
