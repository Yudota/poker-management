import Estado from "../models/Estado";
import Result from "../utils/Result";
import AbstractDAO from "./AbstractDAO";

export default class EstadoDAO extends AbstractDAO {
  constructor() {
    super()

    this.criar = this.criar.bind(this)
    this.consultar = this.consultar.bind(this)
    this.excluir = this.excluir.bind(this)
    this.alterar = this.alterar.bind(this)

  }
  async criar(): Promise<any> {
    return this.result = { mensagem: 'Erro. Não é possível criar uma nova cidade.', data: {} } as unknown as Result
  }
  async alterar(entidade: Estado): Promise<any> {
    return this.result = { mensagem: 'Erro. Não é possível editar informações de uma cidade.', data: {} } as unknown as Result
  }
  async excluir(id: number): Promise<any> {
    return this.result = { mensagem: 'Erro. Não é possível excluir uma cidade.', data: {} } as unknown as Result
  }
  async consultar(entidade?: Estado | undefined): Promise<Result> {
    if (entidade) {
      try {
        const result = await AbstractDAO.getPrismaClient().estados.findFirst({
          where: { id: Number(entidade.id) },
        })
        return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      } catch (error) {
        console.log('ERRO::', error)
        return this.result
      }
    }
    else {
      try {
        const result = await AbstractDAO.getPrismaClient().estados.findMany()
        return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      } catch (error) {
        console.log('ERRO::', error)
        return this.result
      }
    }
  }
  async consultaPorUF(entidade: Estado): Promise<Result> {
    try {

      const result = await AbstractDAO.getPrismaClient().estados.findFirst({
        where: { uf: 'SP' },
      })
      return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    } catch (error) {
      console.log('ERRO::', error)
      return this.result = { mensagem: 'falha', erro: 1, data: error } as unknown as Result
    }

  }
}
