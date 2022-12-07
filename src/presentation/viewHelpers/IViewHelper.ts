import { Request } from "express";
import AbsEntidadeDominio from "../../models/AbsEntidadeDominio";
export default interface IViewHelper {
    getEntidade: (req: Request) => AbsEntidadeDominio
    setEntidade: () => void
}