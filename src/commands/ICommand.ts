import { IEntidadeDominio } from "../models/EntidadeDominio";

export interface ICommand {
  executar: (entidade: IEntidadeDominio) => String;
}
