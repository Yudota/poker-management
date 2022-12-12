import ConnectionFactory from "./ConnectionFactory";

import Telefone from "../models/Telefone";
import AbstractDAO from "./AbstractDAO";
import Result from "../utils/Result";

export default class TelefoneDAO extends AbstractDAO {
  constructor() {
    super()

    this.criar = this.criar.bind(this)
    this.consultar = this.consultar.bind(this)
    this.excluir = this.excluir.bind(this)
    this.alterar = this.alterar.bind(this)

  }
  async criar(entidade: Telefone): Promise<Result> {
    const { ddd, numero } = entidade
    try {
      const result = await AbstractDAO.con.telefones.create({
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
  async alterar(entidade: Telefone): Promise<Result> {
    const { ddd, numero } = entidade
    try {
      const result = await AbstractDAO.con.telefones.update({
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
  async excluir(id: number): Promise<Result> {
    try {
      const result = await AbstractDAO.con.telefones.delete({
        where: { id },

      })
      return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    } catch (error) {
      console.log('deu merda:', error)
      return this.result
    }
  }
  async consultar(entidade?: Partial<Telefone> | undefined): Promise<Result> {
    if (entidade) {
      try {
        const result = await AbstractDAO.con.telefones.findFirst({
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
        const result = await AbstractDAO.con.telefones.findMany()
        return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      } catch (error) {
        console.log('deu merda:', error)
        return this.result
      }
    }
  }
}
