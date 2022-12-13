import Result from "../utils/Result";
import AbstractDAO from "./AbstractDAO";
import EnderecoDAO from "./EnderecoDAO";
import Jogador from "../models/Jogador";
import Endereco from "../models/Endereco";
import Carteira from "../models/Carteira";
import Telefone from "../models/Telefone";
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

      const enderecoDAO = new EnderecoDAO()
      const { id: fk_endereco } = (await enderecoDAO.criar(entidade.endereco)).data as unknown as Endereco

      const carteiraDAO = new CarteiraDAO()
      const { id: fk_carteira } = (await carteiraDAO.criar(entidade.carteira)).data as unknown as Carteira

      const telefoneDAO = new TelefoneDAO()
      const { id: fk_telefone } = (await telefoneDAO.criar(entidade.telefone)).data as unknown as Telefone

      const result = await AbstractDAO.getPrismaClient().jogadores.create({
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
      console.log('ERRO::', error)
      return this.result
    }
  }
  async alterar(entidade: Jogador): Promise<Result> {

    const carteiraDAO = new CarteiraDAO()
    const { id: newCarteiraId } = (await carteiraDAO.alterar(entidade.carteira)).data as unknown as Carteira

    const telefoneDAO = new TelefoneDAO()
    const { id: newTelefoneId } = (await telefoneDAO.alterar(entidade.telefone)).data as unknown as Telefone

    const enderecoDAO = new EnderecoDAO()
    const { id: newEnderecoId } = (await enderecoDAO.alterar(entidade.endereco)).data as unknown as Endereco

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

    const result = await AbstractDAO.getPrismaClient().jogadores.update({
      where: { id: Number(id) },
      data: {
        id: Number(id),
        nome,
        data_nascimento: dataNascimento,
        apelido,
        email,
        cpf,
        senha,
        fk_carteira: newCarteiraId,
        fk_telefone: newTelefoneId,
        fk_endereco: newEnderecoId
      }
    })
    console.log(result)
    this.result = { mensagem: 'sucesso', data: result } as unknown as Result
    return this.result
  }
  async excluir(id: number): Promise<any> {
    super.id = id
    try {
      const player = await AbstractDAO.getPrismaClient().jogadores.findUnique({
        where: { id },
      })
      const resultadoBanco = await AbstractDAO.getPrismaClient().jogadores.delete({
        where: { id },
      })
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
        const result = await AbstractDAO.getPrismaClient().jogadores.findUnique({
          where: { id: entidade.id },
        })
        return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      } catch (error) {
        console.log('ERRO::', error)
        return this.result
      }
    }
    else {
      try {
        const result = await AbstractDAO.getPrismaClient().jogadores.findMany()
        return this.result = { mensagem: 'sucesso', data: result } as unknown as Result
      } catch (error) {
        console.log('ERRO::', error)
        return this.result
      }
    }
  }
}
