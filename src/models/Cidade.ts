import AbsEntidadeDominio from "./AbsEntidadeDominio";

type CidadeConstructor = {
  descricao: string;
  id?: string;
}
export default class Cidade extends AbsEntidadeDominio {
  private _descricao: string;

  constructor({ descricao, id }: CidadeConstructor) {
    super(id)
    this._descricao = descricao;
  }

  get descricao(): string {
    return this._descricao;
  }
  set descricao(descricao: string) {
    this._descricao = descricao;
  }
  get id(): string | undefined {
    return super.id;
  }
  set id(id: string | undefined) {
    super.id = id;
  }
}
