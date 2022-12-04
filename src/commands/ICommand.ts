import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import { IEntidade } from '../models/IEntidade';

export interface ICommand {
    executar: (entidade: IEntidade | null| undefined) => String
}