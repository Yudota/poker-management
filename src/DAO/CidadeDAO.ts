import Cidade from "../models/Cidade";
import Result from "../utils/Result";
import AbstractDAO from "./AbstractDAO";

export default class CidadeDAO extends AbstractDAO {
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
  async alterar(entidade: Cidade): Promise<any> {
    return this.result = { mensagem: 'Erro. Não é possível editar informações de uma cidade.', data: {} } as unknown as Result
  }
  async excluir(id: number): Promise<any> {
    return this.result = { mensagem: 'Erro. Não é possível excluir uma cidade.', data: {} } as unknown as Result
  }
  async consultar(entidade?: Cidade | undefined): Promise<Result> {
    if (entidade) {
      try {
        const result = await AbstractDAO.con.cidades.findFirst({
          where: { nomeCidade: entidade.nomeCidade },
        })
        return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      } catch (error) {
        console.log('deu merda:', error)
        return this.result
      }
    }
    else {
      try {
        const result = await AbstractDAO.con.cidades.findMany()
        return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      } catch (error) {
        console.log('deu merda:', error)
        return this.result
      }
    }
  }
    async consultarPorNome(entidade:Cidade): Promise<Result> {
        console.log("cidade enviada ",entidade.nomeCidade);
        
            try {
                const result = await AbstractDAO.con.cidades.findFirst({
                    where: { nomeCidade: entidade.nomeCidade },
                })
                return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
            } catch (error) {
                console.log('deu merda:', error)
                return this.result
            }
        }
    }
