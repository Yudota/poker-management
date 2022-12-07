import AbsEntidadeDominio from "../../models/AbsEntidadeDominio";
import { IEntidadeDominio } from "../../models/EntidadeDominio";
import { AbsCommand } from "../AbsCommand";

export class DeletarCommand extends AbsCommand {
  executar(entidade: IEntidadeDominio) {
    this.facade.deletar(entidade);
    return "";
  }
}
