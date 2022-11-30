import { Request, Response, Router } from "express";


const routes = Router()
const endpoint = 'players'

//routes é um controlador 

routes.get(`/${endpoint}/`, async (request: Request, response: Response): Promise<Response> => {
  // response = await service(request);
  const { id } = request.query
  console.log(id)
  response.json({ message: `GET Player, with id: ${id}!` })
  return response
})

routes.get(`/${endpoint}/all`, async (request: Request, response: Response): Promise<any> => {
  // response = await service(request);
  response.json({ message: "GET ALL Players!" })
  return response
})
routes.post(`${endpoint}/`, async (request: Request, response: Response): Promise<any> => {
  // response = await service(request);
  const { id } = request.query
  console.log(id)
  response.json({ message: `POST Player!` })
  return response
})
routes.put(`${endpoint}/`, async (request: Request, response: Response): Promise<any> => {
  // response = await service(request);
  const { id } = request.query
  console.log(id)
  response.json({ message: `PUT Player, with id: ${id} !` })
  return response
})
routes.delete(`${endpoint}/`, async (request: Request, response: Response): Promise<any> => {
  // response = await service(request);
  const { id } = request.query
  console.log(id)
  response.json({ message: `DELETE Player, with id: ${id} !` })
  return response
})
export { routes }