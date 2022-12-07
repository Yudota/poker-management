import { IEntidadeDominio } from "../models/EntidadeDominio";

export interface IStrategy{
    processar: (entidade: IEntidadeDominio) => String
}