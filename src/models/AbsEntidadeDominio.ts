export default abstract class AbsEntidadeDominio {
  protected _id?: string;

  get id(): string | undefined {
    return this._id;
  }
  set id(id: string | undefined) {
    this._id = id
  }

}
