import Facade from "../facades/Facade";
import IFacade from "../facades/IFacade";
import { ICommand } from "./ICommand";
import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import Result from "../utils/Result";

export abstract class AbsCommand implements ICommand {
  async executar(entidade: AbsEntidadeDominio) {
    return new Result('');
  }
  protected facade: IFacade = new Facade();
}
