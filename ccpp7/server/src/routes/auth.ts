import { Router } from "express";
import {
	getProfile,
	login,
	logout,
	signup,
	updateProfile,
} from "../controllers";
import { authenticateUser } from "../middlewares";

const router = Router();

router.route("/").post(signup).patch(login).get(logout);
router
	.route("/me")
	.get(authenticateUser, getProfile)
	.patch(authenticateUser, updateProfile);

export const authRouter = router;
