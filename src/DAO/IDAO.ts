import AbsEntidadeDominio from "../models/AbsEntidadeDominio";

export default interface IDAO {
    getAll: () => Array<AbsEntidadeDominio>;
    getByID: (id: number) => AbsEntidadeDominio;
    save: (entity: AbsEntidadeDominio) => Promise<void>;
    update: (entity: AbsEntidadeDominio) => Promise<AbsEntidadeDominio>;
    remove: (entity: AbsEntidadeDominio) => Promise<void>;
}