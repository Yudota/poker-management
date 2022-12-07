import ConnectionFactory from "./ConnectionFactory";
import IDAO from "./IDAO";

import Jogador from "../models/Jogador";
import Result from "../utils/Result";

export default class JogadorDAO implements IDAO {
  con: any;
  result: Result
  constructor() {
    this.criar = this.criar.bind(this)
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
      console.log('entrou no try')
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
      return this.result = result
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
    const result = await this.con.update({
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
    console.log(result)
    return result
  }
  async excluir(id: number): Promise<Result> {
    console.log('criando no DAO')
    console.log('entidade:', id)
    return await this.con.delete({
      where: { id },
    })
  }
  async consultar(entidade: Jogador): Promise<Result> {
    console.log('criando no DAO')
    console.log('entidade:', entidade)
    return await this.con.findMany()
  }

}