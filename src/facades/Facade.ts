
import IDAO from "../DAO/IDAO";
import JogadorDAO from "../DAO/JogadorDAO";
import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import IStrategy from "../strategy/IStrategy";
import IFacade from "./IFacade";

// interface Mapper {
//     [x:]
// }

// const mapper = {
//     'Create': {
//         'JOGADOR': [
//             strategy1,
//             strategy2,
//             strategy3,
//             strategy4,
//             strategy5,
//         ],
//         'ESTADO': [
//             strategy1,
//             strategy2,
//             strategy6,
//         ]
//     },
//     'Read': {
//         'JOGADOR': [
//             strategy1,
//             strategy2,
//             strategy3,
//             strategy4,
//             strategy5,
//         ],
//         'ESTADO': [
//             strategy1,
//             strategy2,
//             strategy6,
//         ]
//     },
//     'Update': {
//         'JOGADOR': [
//             strategy1,
//             strategy2,
//             strategy3,
//             strategy4,
//             strategy5,
//         ],
//         'ESTADO': [
//             strategy1,
//             strategy2,
//             strategy6,
//         ]
//     },
//     'Delete': {
//         'JOGADOR': logicDeleteJogador,
//         'ESTADO': [
//             strategy1,
//             strategy2,
//             strategy6,
//         ]
//     },
//     'BANANA': {
//         'NANICA': [
//             strategy1,
//             strategy2,
//             strategy3,
//             strategy4,
//         ],
//         'PRATA': [
//             ...
//         ],
//     }
// }
export default class Facade implements IFacade {
  private daos: Map<String, IDAO>
  private regras: Map<String, Map<String, Array<IStrategy>>>
  constructor() {
    this.regras = new Map();

    this.daos = new Map()

    this.daos.set('Jogador', new JogadorDAO())

  }
  criar(entidade: AbsEntidadeDominio) {
    console.log(entidade, "SALVAR");
    this.daos.get('JogadorDAO')?.save(entidade)

    return "";
  }
  consultar(entidade: Partial<AbsEntidadeDominio>) {
    console.log(entidade, "Listar");

    return "";
  }
  deletar(entidade: AbsEntidadeDominio) {
    console.log(entidade, "Delete");

    return "";
  }
  atualizar(entidade: AbsEntidadeDominio) {
    console.log(entidade, "Atualizar");

    return "";
  }
}
