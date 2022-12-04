import AbsEntidadeDominio from "../../models/AbsEntidadeDominio";
import Carteira from "../../models/Carteira";
import Cidade from "../../models/Cidade";
import Endereco from "../../models/Endereco";
import Estado from "../../models/Estado";
import Jogador, { JogadorConstructor } from "../../models/Jogador";
import Telefone from "../../models/Telefone";
import IViewHelper, { IDados } from "./IViewHelper";

type PlayerViewHelper = {
    nome: string,
    dataNascimento: string,
    apelido: string,
    email: string,
    cpf: string,
    senha: string,
    telefone: {
        ddd: string,
        numero: string,
    },
    saldo: number,
    endereco: {
        cep: string,
        tipoLogradouro: string,
        logradouro: string,
        numero: string,
        complemento: string,
        bairro: string,
        cidade: string,
        estado: string
    },
    id?: string
}
export default class JogadorVH implements IViewHelper {
    constructor(private readonly _dados: PlayerViewHelper) { }

    getEntidade(): AbsEntidadeDominio {
        const { endereco: dataEndereco, telefone: dataTelefone, saldo } = this._dados;
        const { tipoLogradouro, logradouro, bairro, cep, complemento, numero } = dataEndereco;
        const { ddd, numero: numeroTelefone } = dataTelefone;
        const estado = new Estado({ descricao: dataEndereco.estado })
        const cidade = new Cidade({ descricao: dataEndereco.cidade })
        const endereco = new Endereco({
            tipoLogradouro,
            logradouro,
            numero,
            complemento,
            bairro,
            cep,
            cidade,
            estado
        });
        const telefone = new Telefone({ ddd, numero: numeroTelefone });
        const carteira = new Carteira({ saldo })

        return new Jogador({ ...this._dados, endereco, telefone, carteira })
    }
};



