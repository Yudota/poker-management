import GenericFacade from "../facades/JogadorFacade";
import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import { TYPE_COMMAND } from "./types/typeCommand";
import { ICommand } from "./ICommand";


export class GenericCommand implements ICommand {
    private command: TYPE_COMMAND;

    constructor(command: TYPE_COMMAND) {
        this.command = command as TYPE_COMMAND
    }

    executar(entidade: AbsEntidadeDominio): AbsEntidadeDominio {
        return new GenericFacade(entidade, this.command).processar()
    }

}