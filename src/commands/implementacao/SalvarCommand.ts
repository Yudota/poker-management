import AbsEntidadeDominio from "../../models/AbsEntidadeDominio";
import { IEntidadeDominio } from "../../models/EntidadeDominio";
import { AbsCommand } from "../AbsCommand";

export class SalvarCommand extends AbsCommand{
    executar(entidade: IEntidadeDominio) {
        this.facade.salvar(entidade);
        
        return "";
      }
}