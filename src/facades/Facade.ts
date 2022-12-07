
import { TYPE_COMMAND } from "../commands/types/typeCommand";
import IDAO from "../DAO/IDAO";
import JogadorDAO from "../DAO/JogadorDAO";
import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import IStrategy from "../strategy/IStrategy";
import Result from "../utils/Result";
import IFacade from "./IFacade";
import { TYPE_MODEL } from "./types/typeModel";

type MapperStrategies = { [KEY in TYPE_COMMAND]: Array<IStrategy> }
type MapperModelStrategy = {
  [KEY in TYPE_MODEL]: MapperStrategies;
};
type MapperModelDAO = {
  [KEY in TYPE_MODEL]: IDAO;
}
export default class Facade implements IFacade {
  private daos: MapperModelDAO
  private regras: MapperModelStrategy
  constructor() {
    this.regras = {
      [TYPE_MODEL.JOGADOR]: {
        [TYPE_COMMAND.CREATE]: [],
        [TYPE_COMMAND.READ]: [],
        [TYPE_COMMAND.UPDATE]: [],
        [TYPE_COMMAND.DELETE]: [],
      }
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

    try {
      regras.forEach(estrategia => {
        const { mensagem, erro, data } = estrategia.processar(entidade);
        result.mensagem += mensagem + '/n';
        result.erro += erro;
        result.data.push(...data);
      })
      if (!result.erro) {
        result = await dao.criar(entidade)
      }
      return result
    } catch (error) {

    }
    finally {
      return result
    }

  }
  async consultar(entidade: Partial<AbsEntidadeDominio>) {
    console.log(entidade, TYPE_COMMAND.CREATE);
    const className = entidade.constructor.name as TYPE_MODEL;
    const dao = this.daos[className];
    const regras = this.regras[className][TYPE_COMMAND.CREATE];
    let result: Result = new Result('');

    try {
      regras.forEach(estrategia => {
        const { mensagem, erro, data } = estrategia.processar(entidade as AbsEntidadeDominio);
        result.mensagem += mensagem + '/n';
        result.erro += erro;
        result.data.push(...data);
      })
      if (!result.erro) {
        result = await dao.consultar(entidade as AbsEntidadeDominio)
      }
      return result
    } catch (error) {

    }
    finally {
      return result
    }

  }
  async deletar(entidade: AbsEntidadeDominio) {
    console.log(entidade, TYPE_COMMAND.CREATE);
    const className = entidade.constructor.name as TYPE_MODEL;
    const dao = this.daos[className];
    const regras = this.regras[className][TYPE_COMMAND.CREATE];
    let result: Result = new Result('');

    try {
      regras.forEach(estrategia => {
        const { mensagem, erro, data } = estrategia.processar(entidade);
        result.mensagem += mensagem + '/n';
        result.erro += erro;
        result.data.push(...data);
      })
      if (!result.erro) {
        result = await dao.excluir(Number(entidade.id))
      }
      return result
    } catch (error) {

    }
    finally {
      return result
    }

  }
  async atualizar(entidade: AbsEntidadeDominio) {
    console.log(entidade, TYPE_COMMAND.CREATE);
    const className = entidade.constructor.name as TYPE_MODEL;
    const dao = this.daos[className];
    const regras = this.regras[className][TYPE_COMMAND.CREATE];
    let result: Result = new Result('');

    try {
      regras.forEach(estrategia => {
        const { mensagem, erro, data } = estrategia.processar(entidade);
        result.mensagem += mensagem + '/n';
        result.erro += erro;
        result.data.push(...data);
      })
      if (!result.erro) {
        result = await dao.alterar(entidade)
      }
      return result
    } catch (error) {

    }
    finally {
      return result
    }

  }
}
