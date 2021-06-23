import { CreateTagController } from "@controlles/CreateTagController";
import { CreateUserController } from "@controlles/CreateUserController";
import { ensureAdmin } from "@middlewares/ensureAdmin";
import { Router } from "express";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };
