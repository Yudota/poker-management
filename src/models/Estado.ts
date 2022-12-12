import AbsEntidadeDominio from "./AbsEntidadeDominio";

type Props = { nomeEstado: string, uf: string }
export default class Estado extends AbsEntidadeDominio {
  private _nomeEstado: string;
  private _uf: string

  constructor({ nomeEstado, uf }: Props) {
    super();
    this._nomeEstado = nomeEstado;
    this._uf = uf;
  }
  get descricao(): string {
    return this._nomeEstado;
  }
  set descricao(nomeEstado: string) {
    this._nomeEstado = nomeEstado;
  }
  get uf(): string {
    return this._uf;
  }
  set uf(uf: string) {
    this._uf = uf;
  }
}
