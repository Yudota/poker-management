import Endereco from "../models/Endereco";
import Result from "../utils/Result";
import IStrategy from "./IStrategy";
import axios from "axios"
import CidadeDAO from '../DAO/CidadeDAO';
import EstadoDAO from '../DAO/EstadoDAO';
import Cidade from '../models/Cidade';
import Estado from "../models/Estado";
import Jogador from '../models/Jogador';

interface Localizacao{
    cep:string,
    localidade:string,
    uf:string,
    ddd:string
}
export default class ValidarLocalizacao implements IStrategy {
    async processar(entidade: Jogador): Promise<Result> {
        console.log("EStado:", entidade.endereco.estado);
        
        const result = new Result('');
        const cepEntidade = entidade.endereco.cep;
        const estadoEntidade = entidade.endereco.estado.uf
        const cidadeEntidade = entidade.endereco.cidade.nomeCidade
        const daoEstado = new EstadoDAO();
        const daoCidade = new CidadeDAO();
        console.log('estado enviado', estadoEntidade);
        
        const ufResult =  (await daoEstado.consultaPorUF(entidade.endereco.estado).then(result => result.data as unknown as Estado)).uf
        const cidadeResult =  (await daoCidade.consultarPorNome(entidade.endereco.cidade).then(result => result.data as unknown as Cidade)).nomeCidade
        console.log('coco',estadoEntidade);
        
        if(estadoEntidade !== ufResult || cidadeEntidade !== cidadeResult){
            console.log("estado entidade",estadoEntidade);
            console.log("estado result",ufResult);
            console.log("cidade entidade",cidadeEntidade);
            console.log("cidade result",cidadeResult);
            
            result.mensagem = "localização invalida"
            result.erro = 1
            return result
        }     
       const api = axios.create()
       const data = await api.get(`https://viacep.com.br/ws/${cepEntidade}/json`).then(resp=> resp.data)
       const {cep,ddd,localidade,uf} = data as Localizacao;
       if(uf !== ufResult || localidade !== cidadeResult || cep !== cepEntidade){
        console.log("estado entidade",estadoEntidade);
            console.log("estado result",ufResult);
            console.log("cidade entidade",cidadeEntidade);
            console.log("cidade result",cidadeResult);
            console.log('cep', cep);
            console.log('cepEntidade', cepEntidade);
            
            
        result.mensagem = "localização invalida"
        result.erro = 1
        return result
        }
        result.mensagem = "localização valida"
        return result
    }
}
