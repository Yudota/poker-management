import CheckerRequiredAttributes from './CheckerRequiredAttributes';
import ValidarDados from './ValidarDados'

export default class FichaTecnicaCheckerRequired extends CheckerRequiredAttributes {
    constructor() {
        super(['_id', 'complemento'], [{ attribute: '_endereco', checker: new ValidarDados() }]);
    }
}