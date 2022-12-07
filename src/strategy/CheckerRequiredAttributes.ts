import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import Result from "../utils/Result";
import IStrategy from "./IStrategy";

export default class CheckerRequiredAttributes implements IStrategy {
    attributesNotRequired: string[];
    customCheckers: Map<string, IStrategy>;
    constructor(listAttributeNotRequired: string[], listCustomCheckers: { attribute: string, checker: IStrategy }[] = []) {
        this.attributesNotRequired = listAttributeNotRequired;
        this.customCheckers = new Map();
        listCustomCheckers.forEach(({ attribute, checker }) => this.customCheckers.set(attribute, checker))
    }
    processar(entidade: AbsEntidadeDominio): Result {
        let mensagem = '';
        Object.entries(entidade)
            .map(([key, value]) => {
                if (
                    (value === undefined || value === null || value === "")
                    && !this.attributesNotRequired.includes(key)
                ) {
                    mensagem += `${entidade.constructor.name}: ${key.replace('_', '')} não pode ser vazio\n`;
                }

                if (this.customCheckers.get(key)) {
                    const checker = this.customCheckers.get(key);
                    if (value instanceof Array) {
                        value.map(e => {
                            const { mensagem: mensagemRetunedOfCustomChecker, erro } = checker!.processar(e);
                            mensagem += erro ? mensagemRetunedOfCustomChecker : '';
                        });
                    } else {
                        const { mensagem: mensagemRetunedOfCustomChecker, erro } = checker!.processar(value);
                        mensagem += erro ? mensagemRetunedOfCustomChecker : '';
                    }
                }
            });
        return new Result(
            mensagem || 'sucesso',
            mensagem ? 1 : 0,
        );
    }
}