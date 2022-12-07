import AbsEntidadeDominio from "../../models/AbsEntidadeDominio";
import { AbsCommand } from "../AbsCommand";
export class ListarCommand extends AbsCommand {
  executar(entidade: AbsEntidadeDominio) {
    return this.facade.consultar(entidade) || ''
  }
}
