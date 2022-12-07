import AbsEntidadeDominio from "../models/AbsEntidadeDominio"

export default interface IFacade {
  criar: (entidade: AbsEntidadeDominio) => string
  consultar: (objParcialED: Partial<AbsEntidadeDominio>) => string
  atualizar: (entidade: AbsEntidadeDominio) => string
  deletar: (entidade: AbsEntidadeDominio) => string
}
