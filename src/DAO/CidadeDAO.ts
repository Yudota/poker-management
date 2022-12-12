import ConnectionFactory from "./ConnectionFactory";
import IDAO from "./IDAO";

import Cidade from "../models/Cidade";
import Result from "../utils/Result";
import { PrismaClient } from "@prisma/client";
import AbstractDAO from "./AbstractDAO";

export default class CidadeDAO extends AbstractDAO {
    con: PrismaClient;
    result: Result;
    constructor() {
        super()
        this.criar = this.criar.bind(this)
        this.consultar = this.consultar.bind(this)
        this.excluir = this.excluir.bind(this)
        this.alterar = this.alterar.bind(this)

        this.result = new Result('');
        this.con = ConnectionFactory.criar()
    }
    async criar(): Promise<any> {
        return this.result = { mensagem: 'Erro. Não é possível criar uma nova cidade.', data: {} } as unknown as Result
    }
    async alterar(entidade: Cidade): Promise<any> {
        return this.result = { mensagem: 'Erro. Não é possível editar informações de uma cidade.', data: {} } as unknown as Result
    }
    async excluir(id: number): Promise<any> {
        return this.result = { mensagem: 'Erro. Não é possível excluir uma cidade.', data: {} } as unknown as Result
    }
    async consultar(entidade?: Partial<Cidade> | undefined): Promise<any> {
        if (entidade) {
            try {
                const result = await this.con.cidades.findFirst({
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
                const result = await this.con.cidades.findMany()
                return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
            } catch (error) {
                console.log('deu merda:', error)
                return this.result
            }
        }
    }
    async consultarPorNome(entidade:Cidade): Promise<any> {
        console.log("cidade enviada ",entidade.nomeCidade);
        
            try {
                const result = await this.con.cidades.findFirst({
                    where: { descricao: entidade.nomeCidade },
                })
                return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
            } catch (error) {
                console.log('deu merda:', error)
                return this.result
            }
        }
    }