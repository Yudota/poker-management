import AbsEntidadeDominio from "../models/AbsEntidadeDominio"
import Result from "../utils/Result"

export default interface IFacade {
  criar: (entidade: AbsEntidadeDominio) => Promise<Result>
  consultar: (objParcialED: Partial<AbsEntidadeDominio>) => Promise<Result>
  atualizar: (entidade: AbsEntidadeDominio) => Promise<Result>
  deletar: (entidade: AbsEntidadeDominio) => Promise<Result>
}
