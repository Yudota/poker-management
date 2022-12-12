import ConnectionFactory from "./ConnectionFactory";

import Carteira from "../models/Carteira";
import Result from "../utils/Result";
import AbstractDAO from "./AbstractDAO";

export default class CarteiraDAO extends AbstractDAO {

  constructor() {
    super()

    this.criar = this.criar.bind(this)
    this.consultar = this.consultar.bind(this)
    this.excluir = this.excluir.bind(this)
    this.alterar = this.alterar.bind(this)

  }
  async criar(carteira: Carteira): Promise<Result> {

    try {
      const result = await AbstractDAO.con.carteiras.create({
        data: {
          saldo: carteira.saldo,
        },
      })
      return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    } catch (error) {
      console.log('deu merda:', error)
      return this.result
    }
  }
  async alterar(entidade: Carteira): Promise<any> {
    try {
      const result = await AbstractDAO.con.carteiras.update({
        where: { id: Number(entidade.id) },
        data: {
          saldo: entidade.saldo
        }
      })
      return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    } catch (error) {
      console.log('deu merda:', error)
      return this.result
    }
  }
  async excluir(id: number): Promise<any> {
    try {
      const result = await AbstractDAO.con.carteiras.delete({
        where: { id },

      })
      return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    } catch (error) {
      console.log('deu merda:', error)
      return this.result
    }
  }
  async consultar(entidade?: Partial<Carteira> | undefined): Promise<any> {
    if (entidade) {
      try {
        const result = await AbstractDAO.con.carteiras.findFirst({
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
        const result = await AbstractDAO.con.carteiras.findMany()
        return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      } catch (error) {
        console.log('deu merda:', error)
        return this.result
      }
    }
  }
}