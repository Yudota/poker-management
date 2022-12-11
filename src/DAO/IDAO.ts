import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import Result from "../utils/Result";

export default interface IDAO {
    criar(entidade: AbsEntidadeDominio): Promise<any>;
    alterar(entidade: AbsEntidadeDominio): Promise<any>;
    excluir(id: number): Promise<any>;
    consultar(entidade?: Partial<AbsEntidadeDominio>): Promise<any>;
}