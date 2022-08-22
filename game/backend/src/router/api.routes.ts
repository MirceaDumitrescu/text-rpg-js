const expressServer = require("express");
const expressRouter = expressServer.Router();
import { getUsers } from "../controllers/controller.getUsers";
import { getUser } from "../controllers/controller.getUser";
import { saveCharData } from "../controllers/controller.saveUser";
import { getCharInventory, saveCharInventory } from "../controllers/controller.userInventory";
import { getCharEquipment, saveCharEquipment } from './../controllers/controller.userEquipment';
import { getCharLocation, saveCharLocation } from './../controllers/controller.userLocation';
import { getCharLevel, saveCharLevel } from './../controllers/controller.userLevel';
import { getCharHealth, saveCharHealth, getCharMana, saveCharMana } from './../controllers/controller.userStats';

// import { verifyAuth } from "../middleware/authToken";

expressRouter.get("/users/", getUsers);
expressRouter.post("/users/:id", getUser);
expressRouter.post("/users/save/:id", saveCharData);
expressRouter.get("/users/inventory/:id", getCharInventory);
expressRouter.post("/users/inventory/:id", saveCharInventory);
expressRouter.get("/users/equipment/:id", getCharEquipment);
expressRouter.post("/users/equipment/:id", saveCharEquipment);
expressRouter.get("/users/location/:id", getCharLocation);
expressRouter.post("/users/location/:id", saveCharLocation);
expressRouter.get("/users/level/:id", getCharLevel);
expressRouter.post("/users/level/:id", saveCharLevel);
expressRouter.get("/users/health/:id", getCharHealth);
expressRouter.post("/users/health/:id", saveCharHealth);
expressRouter.get("/users/mana/:id", getCharMana);
expressRouter.post("/users/mana/:id", saveCharMana);
// exports
module.exports = expressRouter;
