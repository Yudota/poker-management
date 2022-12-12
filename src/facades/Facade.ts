
import { TYPE_COMMAND } from "../commands/types/typeCommand";
import AbstractDAO from "../DAO/AbstractDAO";
import IDAO from "../DAO/IDAO";
import JogadorDAO from "../DAO/JogadorDAO";
import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import Jogador from "../models/Jogador";
import IStrategy from "../strategy/IStrategy";
import Result from "../utils/Result";
import IFacade from "./IFacade";
import { TYPE_MODEL } from "./types/typeModel";
import ValidarCpf from '../strategy/ValidarCpf';
import ValidarLocalizacao from "../strategy/ValidarLocalizacao";

type MapperStrategies = {
  [KEY in TYPE_COMMAND]: Array<IStrategy>
}
type MapperModelStrategy = {
  [KEY in TYPE_MODEL]: MapperStrategies;
};
type MapperModelDAO = {
  [KEY in TYPE_MODEL]: AbstractDAO;
}
export default class Facade implements IFacade {
  private daos: MapperModelDAO
  private regras: MapperModelStrategy
  constructor() {
    this.regras = {
      [TYPE_MODEL.JOGADOR]: {
        [TYPE_COMMAND.CREATE]: [new ValidarCpf(), new ValidarLocalizacao()],
        [TYPE_COMMAND.READ]: [],
        [TYPE_COMMAND.UPDATE]: [],
        [TYPE_COMMAND.DELETE]: [],
      },

    }
    this.daos = {
      [TYPE_MODEL.JOGADOR]: new JogadorDAO()
    }
  }
  async criar(entidade: AbsEntidadeDominio) {
    console.log(entidade, TYPE_COMMAND.CREATE);
    const className = entidade.constructor.name as TYPE_MODEL;
    const dao = this.daos[className];
    const regras = this.regras[className][TYPE_COMMAND.CREATE];
    let result: Result = new Result('');

    for (const estrategia of regras) {
      const { mensagem, erro, data } = await estrategia.processar(entidade);
      result.mensagem += mensagem + '\n';
      result.erro += erro;
      result.data.push(...data);
      if (result.erro) {
        break;
      }
    }
    if (!result.erro) {
      result = await dao.criar(entidade)
    }
    console.log('resultado:', result)
    return result


  }
  async consultar(entidade: Partial<AbsEntidadeDominio>) {
    console.log(entidade, TYPE_COMMAND.READ);
    const className = entidade.constructor.name as TYPE_MODEL;
    const dao = this.daos[className];
    const regras = this.regras[className][TYPE_COMMAND.READ];
    let result: Result = new Result('');

    for (const estrategia of regras) {
      const { mensagem, erro, data } = await estrategia.processar(entidade);
      result.mensagem += mensagem + '/n';
      result.erro += erro;
      result.data.push(...data);
      if (result.erro) {
        break;
      }
    }
    if (!result.erro) {
      if (entidade.id) {
        result = await dao.consultar(entidade)
      }
      else {
        result = await dao.consultar()
      }
    }

    console.log('resultado:', result)
    return result

  }
  async deletar(entidade: AbsEntidadeDominio) {
    console.log(entidade, TYPE_COMMAND.DELETE);
    const className = entidade.constructor.name as TYPE_MODEL;
    const dao = this.daos[className];
    const regras = this.regras[className][TYPE_COMMAND.CREATE];
    let result: Result = new Result('');
    let response
    for (const estrategia of regras) {
      const { mensagem, erro, data } = await estrategia.processar(entidade);
      result.mensagem += mensagem + '/n';
      result.erro += erro;
      result.data.push(...data);
      if (result.erro) {
        break;
      }
    }
    if (!result.erro) {
      response = await dao.excluir(Number(entidade.id))
    }
    console.log('resultado:', response)
    return response

  }
  async atualizar(entidade: AbsEntidadeDominio) {
    console.log(entidade, TYPE_COMMAND.UPDATE);
    const className = entidade.constructor.name as TYPE_MODEL;
    const dao = this.daos[className];
    console.log(`DAO: ${JSON.stringify(dao, null, 2)}`);
    const regras = this.regras[className][TYPE_COMMAND.CREATE];
    let result: Result = new Result('');

    for (const estrategia of regras) {
      const { mensagem, erro, data } = await estrategia.processar(entidade);
      result.mensagem += mensagem + '/n';
      result.erro += erro;
      result.data.push(...data);
      if (result.erro) {
        break;
      }
    }
    if (!result.erro) {
      result = await dao.alterar(entidade)
    }
    console.log('resultado:', result)
    return result

  }
}
