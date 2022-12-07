import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import { IEntidadeDominio } from "../models/EntidadeDominio";

export default interface IFacade {
  salvar:(entidade:IEntidadeDominio) => String
  listar:(entidade: IEntidadeDominio) => String
  deletar:(entidade:IEntidadeDominio) => String
  atualizar:(entidade:IEntidadeDominio) => String
}
