import { CreateTagController } from "@controllers/CreateTagController";
import { CreateUserController } from "@controllers/CreateUserController";
import { Router } from "express";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserController.handle);
router.post("/tags", createTagController.handle);

export { router };
