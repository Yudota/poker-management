import { Request } from "express";
import { IEntidade } from "../../models/IEntidade";
import { IViewHelper } from "./IViewHelper";

export class ViewHelperPlayer implements IViewHelper {
  getEntidade(req: Request) {
    console.log("view jogador funcioanando");

    return null;
  }
}
