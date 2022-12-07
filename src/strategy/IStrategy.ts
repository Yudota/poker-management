import AbsEntidadeDominio from '../models/AbsEntidadeDominio';
import Result from '../utils/Result';

export default interface IStrategy {
    processar(entidade: AbsEntidadeDominio): Result
}