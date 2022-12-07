import ConnectionFactory from "./ConnectionFactory";
import IDAO from "./IDAO";

import Jogador from "../models/Jogador";
import Result from "../utils/Result";

export default class JogadorDAO implements IDAO {
  con: any;
  result: Result
  constructor() {
    this.result = new Result('');
    this.con = ConnectionFactory.criar()
  }
  async criar(entidade: Jogador): Promise<Result> {
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
    return await this.con.create({
      data: {
        nome,
        dataNascimento,
        apelido,
        email,
        cpf,
        senha,
        telefones: {
          create: { ddd: telefone.ddd, numeroCelular: telefone.numero },
        },
        carteiras: {
          create: { saldo: carteira.saldo },
        },
        enderecos: {
          create: {
            tipoLogradouro: endereco.tipoLogradouro,
            numero: endereco.numero,
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
  }
  async alterar(entidade: Jogador): Promise<Result> {
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
    return await this.con.update({
      where: { id },
      data: {
        id,
        nome,
        dataNascimento,
        apelido,
        email,
        cpf,
        senha,
        telefones: {
          create: { ddd: telefone.ddd, numeroCelular: telefone.numero },
        },
        carteiras: {
          create: { saldo: carteira.saldo },
        },
        enderecos: {
          create: {
            tipoLogradouro: endereco.tipoLogradouro,
            numero: endereco.numero,
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
  }
  async excluir(id: number): Promise<Result> {
    return await this.con.delete({
      where: { id },
    })
  }
  async consultar(entidade: Jogador): Promise<Result> {
    return await this.con.findMany()
  }

}