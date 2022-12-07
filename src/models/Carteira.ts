import AbsEntidadeDominio from "./AbsEntidadeDominio";

export default class Carteira extends AbsEntidadeDominio {
  private _saldo: string;

  constructor(saldo: string) {
    super()
    this._saldo = saldo;
  }

  public getSaldo(): string {
    return this._saldo;
  }
  public setSaldo(saldo: string): void {
    this._saldo = saldo;
  }
  public getId(): string | undefined {
    return super.id;
  }
  public setId(id: string | undefined): void {
    super.id = id;
  }

}
