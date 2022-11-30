import { AbsEntidadeDominio } from "./AbsEntidadeDominio";


type EstadoConstructor = {
  descricao: string;
  sigla: string;
  id?: string
}
export default class Estado extends AbsEntidadeDominio {
  private sigla: string;
  private descricao: string;

  constructor({ descricao, sigla, id }: EstadoConstructor) {
    super(id);
    this.sigla = sigla;
    this.descricao = descricao;
  }
  public getSigla(): string {
    return this.sigla;
  }
  public getDescricao(): string {
    return this.descricao;
  }
  public setSigla(sigla: string): void {
    this.sigla = sigla;
  }
  public setDescricao(descricao: string): void {
    this.descricao = descricao;
  }
}
