import { ICidadeModel } from "./Cidade";
import { IEstadoModel } from "./Estado";

export interface IEnderecoModel {
    tipoLogradouro: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cep: string;
    compĺemento?: string;
    cidade: ICidadeModel
    estado: IEstadoModel
}