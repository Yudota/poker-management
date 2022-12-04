import { TYPE_COMMAND } from "../commands/Command";
import AbsEntidadeDominio from "../models/AbsEntidadeDominio";

export default interface IFacade {
  processar: (
    command: TYPE_COMMAND,
    entidade: AbsEntidadeDominio
  ) => AbsEntidadeDominio;
}
