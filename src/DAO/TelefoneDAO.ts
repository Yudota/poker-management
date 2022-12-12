import ConnectionFactory from "./ConnectionFactory";
import IDAO from "./IDAO";

import Telefone from "../models/Telefone";
import Result from "../utils/Result";
import { PrismaClient } from "@prisma/client";

export default class TelefoneDAO implements IDAO {
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
    async criar(entidade: Telefone): Promise<any> {
        const { ddd, numero } = entidade
        try {
            const result = await this.con.telefones.create({
                data: {
                    ddd,
                    numero
                },
            })
            return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
        } catch (error) {
            console.log('deu merda:', error)
            return this.result
        }
    }
    async alterar(entidade: Telefone): Promise<any> {
        const { ddd, numero } = entidade
        try {
            const result = await this.con.telefones.update({
                where: { id: Number(entidade.id) },
                data: {
                    ddd,
                    numero
                },
            })
            return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
        } catch (error) {
            console.log('deu merda:', error)
            return this.result
        }
    }
    async excluir(id: number): Promise<any> {
        try {
            const result = await this.con.telefones.delete({
                where: { id },

            })
            return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
        } catch (error) {
            console.log('deu merda:', error)
            return this.result
        }
    }
    async consultar(entidade?: Partial<Telefone> | undefined): Promise<any> {
        if (entidade) {
            try {
                const result = await this.con.telefones.findFirst({
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
                const result = await this.con.telefones.findMany()
                return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
            } catch (error) {
                console.log('deu merda:', error)
                return this.result
            }
        }
    }
}

const teste = new TelefoneDAO()