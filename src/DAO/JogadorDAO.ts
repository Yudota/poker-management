import ConnectionFactory from "./ConnectionFactory";
import IDAO from "./IDAO";

import Jogador from "../models/Jogador";
import Result from "../utils/Result";
import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import { jogadores, PrismaClient } from "@prisma/client";

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
      dataNascimento,
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
          dataNascimento,
          apelido,
          email,
          cpf,
          senha,
          telefones: {
            create: { ddd: telefone.ddd, numero: telefone.numero },
          },
          carteiras: {
            create: { saldo: carteira.saldo },
          },
          enderecos: {
            create: {
              tipologradouro: endereco.tipoLogradouro,
              numero: endereco.numeroEndereco,
              bairro: endereco.bairro,
              cep: endereco.cep,
              complemento: endereco.compĺemento,
              cidades: {
                create: {
                  descricao: endereco.cidade.nomeCidade,
                  estados: {
                    create: {
                      descricao: endereco.estado.descricao,
                    }
                  }
                }
              }

            }
          }
        },
      })
      return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      // return this.result = { mensagem: 'mock', data: 'mock' } as unknown as Result
    } catch (error) {
      console.log('deu merda:', error)
      return this.result
    }
  }
  async alterar(entidade: Jogador): Promise<Result> {
    console.log('criando no DAO')
    console.log('entidade:', entidade)
    const {
      id,
      apelido,
      carteira,
      cpf,
      dataNascimento,
      email,
      endereco,
      nome,
      senha,
      telefone
    } = entidade
    // const result = await this.con.jogadores.update({
    //   where: { id },
    //   data: {
    //     id,
    //     nome,
    //     dataNascimento,
    //     apelido,
    //     email,
    //     cpf,
    //     senha,
    //     telefones: {
    //       create: { ddd: telefone.ddd, numero: telefone.numero },
    //     },
    //     carteiras: {
    //       update: { saldo: carteira.saldo },
    //     },
    //     enderecos: {
    //       update: {
    //         tipologradouro: endereco.tipoLogradouro,
    //         numero: endereco.numeroEndereco,
    //         bairro: endereco.bairro,
    //         cep: endereco.cep,
    //         complemento: endereco.compĺemento,
    //         cidades: {
    //           update: {
    //             descricao: endereco.cidade.nomeCidade,
    //             estados: {
    //               update: {
    //                 descricao: endereco.estado.descricao,
    //               }
    //             }
    //           }
    //         }

    //       }
    //     }
    //   },
    // })
    // console.log(result)
    // this.result.data = JSON.stringify(result)
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
  async consultar(entidade: Jogador): Promise<Result> {
    console.log('consultando  no DAO')
    console.log('entidade:', entidade)
    try {

      const result = await this.con.jogadores.findMany()
      return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      // return this.result = { mensagem: 'mock', data: 'mock' } as unknown as Result
    } catch (error) {
      console.log('deu merda:', error)
      return this.result
    }
  }

}