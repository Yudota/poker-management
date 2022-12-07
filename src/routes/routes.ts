import { Request, Response, Router } from "express";
import { Controller }from "../presentation/controller/Controller";


const routes = Router();
const endpoint = "players";
const controller = new Controller();

routes.get("/player", controller.handle);
routes.post("/player", controller.handle);
routes.put("/player",controller.handle);
routes.delete("/player",controller.handle);
export { routes };
