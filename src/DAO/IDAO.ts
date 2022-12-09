import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import Result from "../utils/Result";

export default interface IDAO {
    criar(entidade: AbsEntidadeDominio): Promise<Result>;
    alterar(entidade: AbsEntidadeDominio): Promise<Result>;
    excluir(id: number): Promise<Result>;
    consultar(entidade: Partial<AbsEntidadeDominio>): Promise<Result>;
}