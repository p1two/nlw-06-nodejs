import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateTagController } from "@controllers/CreateTagController";
import { CreateUserController } from "@controllers/CreateUserController";
import { ensureAdmin } from "@middlewares/ensureAdmin";
import { Router } from "express";

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };
