import ConnectionFactory from "./ConnectionFactory";
import IDAO from "./IDAO";

import Jogador from "../models/Jogador";
import Result from "../utils/Result";
import { PrismaClient } from "@prisma/client";

export default class JogadorDAO implements IDAO {
  con: PrismaClient;
  result: Result
  constructor() {
    this.criar = this.criar.bind(this)
    this.consultar = this.consultar.bind(this)
    this.excluir = this.excluir.bind(this)
    this.alterar = this.alterar.bind(this)

    this.result = new Result('');
    this.con = ConnectionFactory.criar()
  }
  async criar(entidade: Jogador): Promise<Result> {
    console.log('criando no DAO')
    console.log('entidade:', entidade)
    const {
      apelido,
      carteira,
      cpf,
      dataNascimento: data_nascimento,
      email,
      endereco,
      nome,
      senha,
      telefone
    } = entidade
    console.log('teste destruct:', apelido);

    try {
      console.log('entrou no try create')
      const result = await this.con.jogadores.create({
        data: {
          nome,
          data_nascimento,
          apelido,
          email,
          cpf,
          senha,
          fk_carteira: carteira.id as number,
          fk_endereco: endereco.id as number,
          fk_telefone: telefone.id as number,
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