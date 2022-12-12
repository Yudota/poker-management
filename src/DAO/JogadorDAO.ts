import ConnectionFactory from "./ConnectionFactory";
import Result from "../utils/Result";

import AbstractDAO from "./AbstractDAO";
import EnderecoDAO from "./EnderecoDAO";

import Jogador from "../models/Jogador";
import Endereco from "../models/Endereco";
import Carteira from "../models/Carteira";
import Telefone from "../models/Telefone";

export default class JogadorDAO extends AbstractDAO {

  apelido!: string
  cpf!: string
  dataNascimento!: string
  email!: string
  nome!: string
  senha!: string
  endereco!: Endereco
  carteira!: Carteira
  telefone!: Telefone
  id!: number
  constructor() {
    super(0)

    this.criar = this.criar.bind(this)
    this.consultar = this.consultar.bind(this)
    this.excluir = this.excluir.bind(this)
    this.alterar = this.alterar.bind(this)

    this.result = new Result('');
    this.con = ConnectionFactory.criar()
  }
  async criar(entidade: Jogador): Promise<Result> {
    try {
      console.log('buscando dados necessários para criar jogador');

      const endDAO = new EnderecoDAO({} as Endereco)

      const result = await this.con.jogadores.create({
        data: {
          nome: this.nome,
          data_nascimento: this.dataNascimento,
          apelido: this.apelido,
          email: this.email,
          cpf: this.cpf,
          senha: this.senha,
          fk_carteira: this.carteira.id as number,
          fk_endereco: this.endereco.id as number,
          fk_telefone: this.telefone.id as number,
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