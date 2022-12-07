import Facade from "../facades/Facade";
import IFacade from "../facades/IFacade";
import { ICommand } from "./ICommand";
import AbsEntidadeDominio from "../models/AbsEntidadeDominio";

export abstract class AbsCommand implements ICommand {
  executar(entidade: AbsEntidadeDominio) {
    return "";
  }
  protected facade: IFacade = new Facade();
}
