import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateComplimentController } from "@controllers/CreateComplimentController";
import { CreateTagController } from "@controllers/CreateTagController";
import { CreateUserController } from "@controllers/CreateUserController";
import { ListUserReceivedComplimentsController } from "@controllers/ListUserReceivedComplimentsController";
import { ListUserSentComplimentsController } from "@controllers/ListUserSentComplimentsController";
import { ensureAdmin } from "@middlewares/ensureAdmin";
import { ensureAuthenticated } from "@middlewares/ensureAuthenticated";
import { Router } from "express";

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const listUserReceivedComplimentsController =
  new ListUserReceivedComplimentsController();
const listUserSentComplimentsController =
  new ListUserSentComplimentsController();

router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);
router.get(
  "/users/compliments/received",
  ensureAuthenticated,
  listUserReceivedComplimentsController.handle
);
router.get(
  "/users/compliments/sent",
  ensureAuthenticated,
  listUserSentComplimentsController.handle
);

export { router };
