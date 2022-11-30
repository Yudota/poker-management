import AbsEntidadeDominio from "./AbsEntidadeDominio";


type CarteiraConstructor = {
  saldo: number;
  id?: string;
}
export default class Carteira extends AbsEntidadeDominio {
  private saldo: number;

  constructor({ saldo, id }: CarteiraConstructor) {
    super(id)
    this.saldo = saldo;
  }

  public getSaldo(): number {
    return this.saldo;
  }
  public setSaldo(saldo: number): void {
    this.saldo = saldo;
  }
  public getId(): string | undefined {
    return super.id;
  }
  public setId(id: string | undefined): void {
    super.id = id;
  }

}
