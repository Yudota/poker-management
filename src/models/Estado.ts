import AbsEntidadeDominio from "./AbsEntidadeDominio";
export default class Estado extends AbsEntidadeDominio {
  private nomeEstado: string;

  constructor(id:string, nomeEstado: string) {
    super(id);
    this.nomeEstado = nomeEstado;
  }
  public getDescricao(): string {
    return this.nomeEstado;
  }
  public setDescricao(nomeEstado: string): void {
    this.nomeEstado = nomeEstado;
  }
}
