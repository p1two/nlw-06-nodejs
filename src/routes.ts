import { AuthenticateUserController } from "@controlles/AuthenticateUserController";
import { CreateComplimentController } from "@controlles/CreateComplimentController";
import { CreateTagController } from "@controlles/CreateTagController";
import { CreateUserController } from "@controlles/CreateUserController";
import { ensureAdmin } from "@middlewares/ensureAdmin";
import { Router } from "express";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);

export { router };
