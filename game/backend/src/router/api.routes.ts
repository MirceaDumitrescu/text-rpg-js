const expressServer = require("express");
const expressRouter = expressServer.Router();
import { getUsers } from "../controllers/controller.getUsers";
import { verifyAuth } from "../middleware/authToken";

expressRouter.get("/users/", verifyAuth, getUsers);
// exports
module.exports = expressRouter;
