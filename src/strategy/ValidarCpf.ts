import Result from "../utils/Result";
import IStrategy from "./IStrategy";
import {validate} from "gerador-validador-cpf"
import Jogador from "../models/Jogador";

export default class ValidarCpf implements IStrategy{
    processar(entidade: Jogador): Promise<Result> {
        let cpf = entidade.cpf!
        const result = new Result('')
        let mensage = ""
        if(!validate(cpf)) {
            result.mensagem = "Cpf invalido"
            result.erro = 1
         return Promise.resolve(result)
        }
        result.mensagem = "sucesso"
        return Promise.resolve(result)
    }
}

    
