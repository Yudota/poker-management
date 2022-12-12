import Endereco from "../models/Endereco";
import Result from "../utils/Result";
import AbstractDAO from "./AbstractDAO";
import Estado from "../models/Estado";
import Cidade from "../models/Cidade";
import CidadeDAO from "./CidadeDAO";
import { Code } from "typeorm";

export default class EnderecoDAO extends AbstractDAO {

  constructor() {
    super()
    this.criar = this.criar.bind(this)
    this.consultar = this.consultar.bind(this)
    this.excluir = this.excluir.bind(this)
    this.alterar = this.alterar.bind(this)

  }
  async criar(endereco: Endereco): Promise<Result> {
    const cid = new CidadeDAO()
    const resultCid = (await cid.consultar(endereco.cidade)).data as unknown as Cidade

    try {
      const fk_cidade = Number(resultCid.id)
      const result = await AbstractDAO.con.enderecos.create({
        data: {
          numero: endereco.numeroEndereco,
          bairro: endereco.bairro,
          cep: endereco.cep,
          complemento: endereco.complemento,
          fk_cidade,
          tipo_logradouro: endereco.tipoLogradouro,
          logradouro: endereco.logradouro

        },
      })
      return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    } catch (error) {
      console.log('deu merda:', error)
      return this.result
    }
  }
  async alterar(endereco: Endereco): Promise<Result> {
    const cid = new CidadeDAO()
    const resultCid = (await cid.consultar(endereco.cidade)).data as unknown as Cidade
    try {
      const result = await AbstractDAO.con.enderecos.update({
        where: { id: Number(endereco.id) },
        data: {
          bairro: endereco.bairro,
          cep: endereco.cep,
          complemento: endereco.complemento,
          fk_cidade: resultCid.id,
          tipo_logradouro: endereco.tipoLogradouro,
          logradouro: endereco.logradouro

        }
      })
      return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    } catch (error) {
      console.log('deu merda:', error)
      return this.result
    }
  }
  async excluir(id: number): Promise<Result> {
    try {
      const result = await AbstractDAO.con.enderecos.delete({
        where: { id },

      })
      return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    } catch (error) {
      console.log('deu merda:', error)
      return this.result
    }
  }
  async consultar(entidade?: Endereco): Promise<Result> {
    if (entidade) {
      try {
        const result = await AbstractDAO.con.enderecos.findFirst({
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
        const result = await AbstractDAO.con.enderecos.findMany()
        return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      } catch (error) {
        console.log('deu merda:', error)
        return this.result
      }
    }
  }
}
