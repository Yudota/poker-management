import AbsEntidadeDominio from "./AbsEntidadeDominio";

export default class Carteira extends AbsEntidadeDominio {
  private _saldo: string;

  constructor(saldo: string, id?: string) {
    super(id)
    this._saldo = saldo;
  }

  public get saldo(): string {
    return this._saldo;
  }
  public set saldo(saldo: string) {
    this._saldo = saldo;
  }

}
