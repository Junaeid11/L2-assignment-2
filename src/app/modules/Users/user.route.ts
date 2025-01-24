import { Router } from "express";
import { UserController } from "./user.controller";
import  validateRequest  from "../../middlewares/validateRequest";
import { validation } from "./user.validation";


const userRouter = Router();

userRouter.post("/register", validateRequest(validation), UserController.registerUser);
userRouter.post("/login", UserController.loginUser);

export default userRouter;
