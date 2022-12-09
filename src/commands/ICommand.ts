import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import Result from "../utils/Result";

export interface ICommand {
  executar: (entidade: AbsEntidadeDominio) => Promise<Result>;
}
