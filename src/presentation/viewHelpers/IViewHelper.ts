import { Request } from "express";
import { IEntidadeDominio } from "../../models/EntidadeDominio";
export default interface IViewHelper {
    getEntidade: (req: Request) => IEntidadeDominio
    setEntidade: () => void
}