import AbsEntidadeDominio from "./AbsEntidadeDominio";

type Props = { nomeEstado: string }
export default class Estado extends AbsEntidadeDominio {
  private nomeEstado: string;

  constructor({ nomeEstado }: Props) {
    super();
    this.nomeEstado = nomeEstado;
  }
  get descricao(): string {
    return this.nomeEstado;
  }
  set descricao(nomeEstado: string) {
    this.nomeEstado = nomeEstado;
  }
}
