import AbsEntidadeDominio from "../models/AbsEntidadeDominio";

export interface ICommand {
    executar: (entidade: AbsEntidadeDominio) => AbsEntidadeDominio
}