import AbsEntidadeDominio from "../../models/AbsEntidadeDominio";
import { AbsCommand } from "../AbsCommand";

export class DeletarCommand extends AbsCommand {
  executar(entidade: AbsEntidadeDominio) {
    return this.facade.deletar(entidade);
  }
}
