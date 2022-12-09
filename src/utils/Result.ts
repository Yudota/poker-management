import AbsEntidadeDominio from '../models/AbsEntidadeDominio';

export default class Result {
    mensagem: string;
    erro: number;
    data: AbsEntidadeDominio[] | string;
    constructor(mensagem: string, erro: number = 0, data: AbsEntidadeDominio[] = []) {
        this.mensagem = mensagem;
        this.erro = erro;
        this.data = data;
    }
}