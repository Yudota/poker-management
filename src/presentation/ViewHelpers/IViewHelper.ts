import AbsEntidadeDominio from "../../models/AbsEntidadeDominio";

export interface IDados {
    [x: string]: any
}
export default interface IViewHelper {
    getEntidade: (dados: IDados) => AbsEntidadeDominio
}