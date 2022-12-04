import { Request, Response, Router } from "express";
import { Controller } from "../apresentation/controller/Controller";

const routes = Router();
const endpoint = "players";
const controller = new Controller();
//routes é um controlador

routes.get(`/${endpoint}/`, controller.handle);

routes.get(`/${endpoint}/all`, controller.handle);
routes.post(
  `${endpoint}/`,
  async (request: Request, response: Response): Promise<any> => {
    // response = await service(request);
    const { id } = request.query;
    console.log(id);
    response.json({ message: `POST Player!` });
    return response;
  }
);
routes.put(
  `${endpoint}/`,
  async (request: Request, response: Response): Promise<any> => {
    // response = await service(request);
    const { id } = request.query;
    console.log(id);
    response.json({ message: `PUT Player, with id: ${id} !` });
    return response;
  }
);
routes.delete(
  `${endpoint}/`,
  async (request: Request, response: Response): Promise<any> => {
    // response = await service(request);
    const { id } = request.query;
    console.log(id);
    response.json({ message: `DELETE Player, with id: ${id} !` });
    return response;
  }
);
export { routes };
