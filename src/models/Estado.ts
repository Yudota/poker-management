import AbsEntidadeDominio from "./AbsEntidadeDominio";

type Props = { uf: string }
export default class Estado extends AbsEntidadeDominio {
  private _uf: string

  constructor({ uf }: Props) {
    super();
    this._uf = uf;
  }
  get uf(): string {
    return this._uf;
  }
  set uf(uf: string) {
    this._uf = uf;
  }
}
