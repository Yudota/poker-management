import AbsEntidadeDominio from "./AbsEntidadeDominio";


type CarteiraConstructor = {
  saldo: number;
  id?: string;
}
export default class Carteira extends AbsEntidadeDominio {
  private _saldo: number;

  constructor({ saldo, id }: CarteiraConstructor) {
    super(id)
    this._saldo = saldo;
  }

  public getSaldo(): number {
    return this._saldo;
  }
  public setSaldo(saldo: number): void {
    this._saldo = saldo;
  }
  public getId(): string | undefined {
    return super.id;
  }
  public setId(id: string | undefined): void {
    super.id = id;
  }

}
