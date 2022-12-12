import Endereco from "../models/Endereco";
import Result from "../utils/Result";
import AbstractDAO from "./AbstractDAO";
import Estado from "../models/Estado";
import Cidade from "../models/Cidade";

export default class EnderecoDAO extends AbstractDAO {
  bairro: string;
  cep: string;
  cidade: Cidade
  complemento: string;
  estado: Estado
  logradouro: string;
  numeroEndereco: string;
  tipoLogradouro: string;

  constructor({ bairro, cep, cidade, complemento, estado, logradouro, numeroEndereco, tipoLogradouro, id }: Endereco) {
    super()
    this.criar = this.criar.bind(this)
    this.consultar = this.consultar.bind(this)
    this.excluir = this.excluir.bind(this)
    this.alterar = this.alterar.bind(this)

    this.bairro = bairro
    this.cep = cep
    this.cidade = cidade
    this.complemento = complemento
    this.estado = estado
    this.logradouro = logradouro
    this.numeroEndereco = numeroEndereco
    this.tipoLogradouro = tipoLogradouro
  }
  async criar(): Promise<any> {

    try {
      const result = await this.con.enderecos.create({
        data: {
          numero: this.numeroEndereco,
          bairro: this.bairro,
          cep: this.cep,
          complemento: this.complemento,
          fk_cidade: this.cidade.id as number,
          tipo_logradouro: this.tipoLogradouro,
          logradouro: this.logradouro

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
