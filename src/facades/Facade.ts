
import { IDao } from "../DAO/IDao";
import { IEntidadeDominio } from "../models/EntidadeDominio";
import { IStrategy } from "../Strategy/IStrategy";
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
  private daos: Map<String, IDao>
  private regras: Map<String, Map<String, IStrategy[]>>
  constructor(){
    this.regras = new Map<String, Map<String, IStrategy[]>>();
    this.regras.set

    this.daos = new Map<String, IDao>
    
  }
  salvar(entidade: IEntidadeDominio) {
    console.log(entidade,"SALVAR");
    
    return "";
  }
  listar(entidade: IEntidadeDominio) {
    console.log(entidade, "Listar");
    
    return "";
  }
  deletar(entidade: IEntidadeDominio) {
    console.log(entidade, "Delete");
    
    return "";
  }
  atualizar(entidade: IEntidadeDominio) {
    return "";
  }
}
