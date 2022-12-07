import AbsEntidadeDominio from "../../models/AbsEntidadeDominio";
import { AbsCommand } from "../AbsCommand";

export class SalvarCommand extends AbsCommand {
  executar(entidade: AbsEntidadeDominio) {
    this.facade.criar(entidade);

    return "";
  }
}