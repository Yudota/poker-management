import { IEntidadeDominio } from "../../models/EntidadeDominio";
import { AbsCommand } from "../AbsCommand";


export class AtualizarCommand extends AbsCommand{
    executar(entidade: IEntidadeDominio) {
        this.facade.atualizar(entidade)
        return "";
      }
}