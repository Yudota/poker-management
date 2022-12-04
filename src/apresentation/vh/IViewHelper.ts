import { Request } from "express";
import { IEntidade } from "../../models/IEntidade";
export interface IViewHelper {
  getEntidade: (req: Request) => IEntidade | null;
}
