import AbsEntidadeDominio from "./AbsEntidadeDominio";


type EstadoConstructor = {
  descricao: string;
  id?: string;
}
export default class Estado extends AbsEntidadeDominio {
  private descricao: string;

  constructor({ descricao, id }: EstadoConstructor) {
    super(id);
    this.descricao = descricao;
  }
  public getDescricao(): string {
    return this.descricao;
  }
  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }
}
