import AbsEntidadeDominio from "../../models/AbsEntidadeDominio";
import { AbsCommand } from "../AbsCommand";


export class AtualizarCommand extends AbsCommand {
  executar(entidade: AbsEntidadeDominio) {
    return this.facade.atualizar(entidade)
  }
}