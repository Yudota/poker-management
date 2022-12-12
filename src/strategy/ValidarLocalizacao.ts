import Endereco from "../models/Endereco";
import Result from "../utils/Result";
import IStrategy from "./IStrategy";
import axios from "axios"
import CidadeDAO from '../DAO/CidadeDAO';
import EstadoDAO from '../DAO/EstadoDAO';

interface Localizacao{
    cep:string,
    localidade:string,
    uf:string,
    ddd:string
}
export default class ValidarLocalizacao implements IStrategy {
    async processar(entidade: Endereco): Promise<Result> {
        const result = new Result('');
        const cepEntidade = entidade.cep;
        const estadoEntidade = entidade.estado.uf
        const cidadeEntidade = entidade.cidade.nomeCidade
        const daoEstado = new EstadoDAO();
        const daoCidade = new CidadeDAO();
        console.log('estado enviado', estadoEntidade);
        
        const ufResult = await daoEstado.consultaPorUF(entidade.estado).then(result => result.data.uf)
        const cidadeResult = await daoCidade.consultarPorNome(entidade.cidade).then(result => result.data.descricao)
        if(estadoEntidade != ufResult || cidadeEntidade != cidadeResult){
            result.mensagem = "localização ivalida"
            result.erro = 1
            return result
        }     
       const api = axios.create()
       const data = await api.get(`https://viacep.com.br/ws/${cepEntidade}/json`).then(resp=> resp.data)
       const {cep,ddd,localidade,uf} = data as Localizacao;
       if(uf != ufResult || localidade != cidadeResult || cep != cepEntidade){
        result.mensagem = "localização invalida"
        result.erro = 1
        return result
        }
        result.mensagem = "localização valida"
        return result
    }
}
