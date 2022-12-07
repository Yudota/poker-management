import Facade from "../facades/Facade";
import IFacade from "../facades/IFacade";
import { IEntidadeDominio } from "../models/EntidadeDominio";
import { ICommand } from "./ICommand";

export abstract class AbsCommand implements ICommand {
  executar(entidade: IEntidadeDominio) {
    return "";
  }
  protected facade: IFacade = new Facade();
}
