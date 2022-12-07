import ConnectionFactory from "./ConnectionFactory";
import IDAO from "./IDAO";

import Jogador from "../models/Jogador";
import Result from "../utils/Result";

export default class JogadorDAO implements IDAO {
    con: any;
    constructor() {
        this.con = ConnectionFactory.criar()
    }
    criar(entidade: Jogador): Promise<Result> {
        throw new Error("Method not implemented.");
    }
    alterar(entidade: Jogador): Promise<Result> {
        throw new Error("Method not implemented.");
    }
    excluir(id: number): Promise<Result> {
        throw new Error("Method not implemented.");
    }
    consultar(entidade: Jogador): Promise<Result> {
        throw new Error("Method not implemented.");
    }
    getAll(): Array<Jogador> {
        return []
    };

}