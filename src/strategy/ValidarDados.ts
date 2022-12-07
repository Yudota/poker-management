import CheckerRequiredAttributes from './CheckerRequiredAttributes';

export default class JogadorCheckerRequired extends CheckerRequiredAttributes {
  constructor() {
    super(['_id']);
  }
}