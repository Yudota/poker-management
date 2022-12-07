import AbsEntidadeDominio from "../../models/AbsEntidadeDominio";
import { AbsCommand } from "../AbsCommand";

export class SalvarCommand extends AbsCommand {
  executar(entidade: AbsEntidadeDominio) {
    return this.facade.criar(entidade)

  }
}