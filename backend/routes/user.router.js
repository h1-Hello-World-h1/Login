import { Router } from "express";
import { postUserSignInController } from "../controller/userSignIn.controller.js";
import { validateUser } from "../middleware/validateUser.js";
import { postUserLoginController } from "../controller/userLogin.controller.js";

export const UserRouter = Router();

UserRouter.post("/", validateUser, postUserSignInController);
UserRouter.post("/Login", postUserLoginController, validateUser);
