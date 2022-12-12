import ConnectionFactory from "./ConnectionFactory";
import IDAO from "./IDAO";

import Estado from "../models/Estado";
import Result from "../utils/Result";
import { PrismaClient } from "@prisma/client";

export default class EstadoDAO implements IDAO {
    con: PrismaClient;
    result: Result;
    constructor() {
        this.criar = this.criar.bind(this)
        this.consultar = this.consultar.bind(this)
        this.excluir = this.excluir.bind(this)
        this.alterar = this.alterar.bind(this)

        this.result = new Result('');
        this.con = ConnectionFactory.criar()
    }
    async criar(entidade: Estado): Promise<any> {
        return this.result = { mensagem: 'Erro. Não é possível criar uma nova cidade.', data: {} } as unknown as Result
    }
    async alterar(entidade: Estado): Promise<any> {
        return this.result = { mensagem: 'Erro. Não é possível editar informações de uma cidade.', data: {} } as unknown as Result
    }
    async excluir(id: number): Promise<any> {
        return this.result = { mensagem: 'Erro. Não é possível excluir uma cidade.', data: {} } as unknown as Result
    }
    async consultar(entidade?: Partial<Estado> | undefined): Promise<any> {
        if (entidade) {
            try {
                const result = await this.con.estados.findFirst({
                    where: { id: Number(entidade.id) },
                })
                return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
            } catch (error) {
                console.log('deu merda:', error)
                return this.result
            }
        }
        else {
            try {
                const result = await this.con.estados.findMany()
                return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
            } catch (error) {
                console.log('deu merda:', error)
                return this.result
            }
        }
    }
}

const teste = new EstadoDAO()