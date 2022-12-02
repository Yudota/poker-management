import { GenericCommand, TYPE_COMMAND } from "../commands/Command";
import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import IStrategy from "../strategies";
import IFacade from "./IFacade";


interface Mapper {
    [x:]
}

const mapper = {
    'Create': {
        'JOGADOR': [
            strategy1,
            strategy2,
            strategy3,
            strategy4,
            strategy5,
        ],
        'ESTADO': [
            strategy1,
            strategy2,
            strategy6,
        ]
    },
    'Read': {
        'JOGADOR': [
            strategy1,
            strategy2,
            strategy3,
            strategy4,
            strategy5,
        ],
        'ESTADO': [
            strategy1,
            strategy2,
            strategy6,
        ]
    },
    'Update': {
        'JOGADOR': [
            strategy1,
            strategy2,
            strategy3,
            strategy4,
            strategy5,
        ],
        'ESTADO': [
            strategy1,
            strategy2,
            strategy6,
        ]
    },
    'Delete': {
        'JOGADOR': logicDeleteJogador,
        'ESTADO': [
            strategy1,
            strategy2,
            strategy6,
        ]
    },
    'BANANA': {
        'NANICA': [
            strategy1,
            strategy2,
            strategy3,
            strategy4,
        ],
        'PRATA': [
            ...
        ],
    }
}
export default class GenericFacade implements IFacade {
    private _facadeMapper!: Mapper;
    ed: AbsEntidadeDominio;
    command: string;
    constructor(ed: AbsEntidadeDominio, command: string) {
        this.ed = ed;
        this.command = command;
    }

    processar(): AbsEntidadeDominio {
        const strategies = this._facadeMapper[this.command.constructor.name][this.ed.constructor.name]

        try {
            strategies.forEach(strategy => execute(this.ed))
        } catch (err) {

        }

        return {} as AbsEntidadeDominio
    };
} 