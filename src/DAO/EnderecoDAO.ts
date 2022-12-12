import ConnectionFactory from "./ConnectionFactory";
import IDAO from "./IDAO";

import Endereco from "../models/Endereco";
import Result from "../utils/Result";
import { PrismaClient } from "@prisma/client";

export default class EnderecoDAO implements IDAO {
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
  async criar(entidade: Endereco): Promise<any> {
    const { bairro, cep, cidade, complemento, logradouro, numeroEndereco, tipoLogradouro } = entidade
    try {
      const result = await this.con.enderecos.create({
        data: {
          numero: numeroEndereco,
          bairro,
          cep,
          complemento,
          fk_cidade: cidade.id as number,
          tipo_logradouro: tipoLogradouro,
          logradouro

        },
      })
      return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    } catch (error) {
      console.log('deu merda:', error)
      return this.result
    }
  }
  async alterar(entidade: Endereco): Promise<any> {
    // try {
    //   const result = await this.con.carteiras.update({
    //     where: { id: Number(entidade.id) },
    //     data: {
    //       saldo: entidade.saldo
    //     }
    //   })
    //   return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    // } catch (error) {
    //   console.log('deu merda:', error)
    //   return this.result
    // }
  }
  async excluir(id: number): Promise<any> {
    try {
      const result = await this.con.carteiras.delete({
        where: { id },

      })
      return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    } catch (error) {
      console.log('deu merda:', error)
      return this.result
    }
  }
  async consultar(entidade?: Partial<Endereco> | undefined): Promise<any> {
    if (entidade) {
      try {
        const result = await this.con.carteiras.findFirst({
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
        const result = await this.con.carteiras.findMany()
        return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      } catch (error) {
        console.log('deu merda:', error)
        return this.result
      }
    }
  }
}

const teste = new EnderecoDAO()