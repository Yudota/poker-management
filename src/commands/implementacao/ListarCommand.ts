import { IEntidadeDominio } from "../../models/EntidadeDominio";
import { AbsCommand } from "../AbsCommand";
export class ListarCommand extends AbsCommand{
  executar(entidade: IEntidadeDominio ) {
    this.facade.listar(entidade)
    return "";
  }
}
