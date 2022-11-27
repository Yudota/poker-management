import { ICarteiraModel } from "./Carteira";
import { IEnderecoModel } from "./Endereco";
import { ITelefoneModel } from "./Telefone";

export interface IJogadorModel {
    nome: string;
    dataNascimento: string;
    apelido: string;
    email: string;
    cpf: string;
    senha: string;
    telefone: ITelefoneModel[];
    carteira: ICarteiraModel;
    endereco: IEnderecoModel;
}