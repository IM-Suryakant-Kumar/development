import { Router } from "express";
import { getUserProfile, login, logout, signup } from "../controllers";

const router = Router()

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(logout);

export const authRouter = router;