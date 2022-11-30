import AbsEntidadeDominio from "./AbsEntidadeDominio";

type TelefoneConstructor = {
  ddd: string;
  numero: string;
  id?: string;
}
export default class Telefone extends AbsEntidadeDominio {
  private _ddd: string;
  private _numero: string;

  constructor({ ddd, numero, id }: TelefoneConstructor) {
    super(id)
    this._ddd = ddd;
    this._numero = numero;
  }

  get ddd(): string {
    return this._ddd;
  }
  set ddd(ddd: string) {
    this._ddd = ddd;
  }
  get numero(): string {
    return this._numero;
  }
  set numero(numero: string) {
    this._numero = numero;
  }
  get id(): string | undefined {
    return super.id;
  }
  set id(id: string | undefined) {
    super.id = id;
  }


}
