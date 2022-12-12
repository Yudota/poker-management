import ConnectionFactory from "./ConnectionFactory";

import Telefone from "../models/Telefone";
import AbstractDAO from "./AbstractDAO";
import Result from "../utils/Result";

export default class TelefoneDAO extends AbstractDAO {
  ddd: string;
  numero: string;
  constructor({ ddd, numero, id }: Telefone) {
    super(id)

    this.ddd = ddd
    this.numero = numero
    this.criar = this.criar.bind(this)
    this.consultar = this.consultar.bind(this)
    this.excluir = this.excluir.bind(this)
    this.alterar = this.alterar.bind(this)

    this.result = new Result('');
    this.con = ConnectionFactory.criar()
  }
  async criar(): Promise<any> {
    try {
      const result = await this.con.telefones.create({
        data: {
          ddd: this.ddd,
          numero: this.numero
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
