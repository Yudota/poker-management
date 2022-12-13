import Result from "../utils/Result";
import IStrategy from "./IStrategy";
import axios from "axios"
import CidadeDAO from '../DAO/CidadeDAO';
import EstadoDAO from '../DAO/EstadoDAO';
import Cidade from '../models/Cidade';
import Estado from "../models/Estado";
import Jogador from '../models/Jogador';

interface Localizacao {
  cep: string,
  localidade: string,
  uf: string,
  ddd: string
}
export default class ValidarLocalizacao implements IStrategy {
  async processar(entidade: Jogador): Promise<Result> {

    const result = new Result('');
    const cepEntidade = entidade.endereco.cep;
    const estadoEntidade = entidade.endereco.estado.uf
    const cidadeEntidade = entidade.endereco.cidade.nomeCidade
    const daoEstado = new EstadoDAO();
    const daoCidade = new CidadeDAO();

    const ufResult = (await daoEstado.consultaPorUF(entidade.endereco.estado).then(result => result.data as unknown as Estado)).uf
    const cidadeResult = (await daoCidade.consultarPorNome(entidade.endereco.cidade).then(result => result.data as unknown as Cidade)).nomeCidade

    if (estadoEntidade !== ufResult || cidadeEntidade !== cidadeResult) {
      result.mensagem = "Localização não existe em território brasileiro."
      result.erro = 1
      return result
    }
    const api = axios.create()
    const data = await api.get(`https://viacep.com.br/ws/${cepEntidade}/json`).then(resp => resp.data)
    const { cep, localidade, uf } = data as Localizacao;
    if (uf !== ufResult || localidade !== cidadeResult || cep !== cepEntidade) {
      result.mensagem = "CEP divergente de localidade."
      result.erro = 1
      return result
    }
    result.mensagem = "localização valida"
    return result
  }
}
