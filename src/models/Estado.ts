import AbsEntidadeDominio from "./AbsEntidadeDominio";

type Props = { nomeEstado: string, uf: string }
export default class Estado extends AbsEntidadeDominio {
  private nomeEstado: string;
  private _uf: string

  constructor({ nomeEstado, uf }: Props) {
    super();
    this.nomeEstado = nomeEstado;
    this._uf = uf;
  }
  get descricao(): string {
    return this.nomeEstado;
  }
  set descricao(nomeEstado: string) {
    this.nomeEstado = nomeEstado;
  }
  get uf(): string {
    return this._uf;
  }
  set uf(uf: string) {
    this._uf = uf;
  }
}
