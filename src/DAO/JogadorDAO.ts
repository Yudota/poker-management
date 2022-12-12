import ConnectionFactory from "./ConnectionFactory";
import Result from "../utils/Result";

import AbstractDAO from "./AbstractDAO";
import EnderecoDAO from "./EnderecoDAO";

import Jogador from "../models/Jogador";
import Endereco from "../models/Endereco";
import Carteira from "../models/Carteira";
import Telefone from "../models/Telefone";
import CidadeDAO from "./CidadeDAO";
import EstadoDAO from "./EstadoDAO";
import Cidade from "../models/Cidade";
import Estado from "../models/Estado";
import CarteiraDAO from "./CarteiraDAO";
import TelefoneDAO from "./TelefoneDAO";

export default class JogadorDAO extends AbstractDAO {

  constructor() {
    super()

    this.criar = this.criar.bind(this)
    this.consultar = this.consultar.bind(this)
    this.excluir = this.excluir.bind(this)
    this.alterar = this.alterar.bind(this)

  }
  async criar(entidade: Jogador): Promise<Result> {
    try {
      console.log('buscando dados necessários para criar jogador');

      const enderecoDAO = new EnderecoDAO()
      const { id: fk_endereco } = (await enderecoDAO.consultar(entidade.endereco)).data as unknown as Endereco

      const carteiraDAO = new CarteiraDAO()
      const { id: fk_carteira } = (await carteiraDAO.criar(entidade.carteira)).data as unknown as Carteira

      const telefoneDAO = new TelefoneDAO()
      const { id: fk_telefone } = (await telefoneDAO.criar(entidade.telefone)).data as unknown as Telefone

      const result = await this.con.jogadores.create({
        data: {
          nome: entidade.nome,
          data_nascimento: entidade.dataNascimento,
          apelido: entidade.apelido,
          email: entidade.email,
          cpf: entidade.cpf,
          senha: entidade.senha,
          fk_endereco: Number(fk_endereco),
          fk_carteira: Number(fk_carteira),
          fk_telefone: Number(fk_telefone)

        },
      })
      return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    } catch (error) {
      console.log('deu merda:', error)
      return this.result
    }
  }
  async alterar(entidade: Jogador): Promise<Result> {
    const {
      id,
      apelido,
      cpf,
      dataNascimento,
      email,
      nome,
      senha,
    } = entidade
    super.id = id

    const result = await this.con.jogadores.update({
      where: { id: Number(id) },
      data: {
        id: Number(id),
        nome,
        data_nascimento: dataNascimento,
        apelido,
        email,
        cpf,
        senha,
      }
    })
    console.log(result)
    this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    return this.result
  }
  async excluir(id: number): Promise<any> {
    super.id = id
    try {
      const player = await this.con.jogadores.findUnique({
        where: { id },
      })
      console.log('jogador encontrado:', player)
      const resultadoBanco = await this.con.jogadores.delete({
        where: { id },
      })
      console.log('jogador removido:', resultadoBanco)

    } catch (error) {
      console.log(error)
      return this.result.data
    }
    return this.result

  }
  async consultar(entidade?: Jogador): Promise<Result> {
    super.id = entidade!.id
    if (entidade) {
      try {
        const result = await this.con.jogadores.findUnique({
          where: { id: entidade.id },
        })
        return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      } catch (error) {
        console.log('deu merda:', error)
        return this.result
      }
    }
    else {
      try {
        const result = await this.con.jogadores.findMany()
        return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      } catch (error) {
        console.log('deu merda:', error)
        return this.result
      }
    }
  }

}

const 