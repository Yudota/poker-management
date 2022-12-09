import { Router } from "express";
import { Controller } from "../presentation/controller/Controller";


const routes = Router();
const endpoint = "player";
const controller = new Controller();

routes.get(`/${endpoint}`, controller.handle);
routes.post(`/${endpoint}`, controller.handle);
routes.put(`/${endpoint}`, controller.handle);
routes.delete(`/${endpoint}`, controller.handle);
export { routes };
