import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import { ICommand } from "./ICommand";
import { IEntidade } from "../models/IEntidade";
export class ListAllCommand implements ICommand {
  executar(entidade: IEntidade | null | undefined) {
    return "";
  }
}
