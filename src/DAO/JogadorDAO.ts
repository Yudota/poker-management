import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import Jogador from "../models/Jogador";
import IDAO from "./IDAO";

export default class JogadorDAO implements IDAO {
    getAll(): Array<Jogador> {
        return []
    };
    getByID!: (id: number) => AbsEntidadeDominio;
    save!: (entity: AbsEntidadeDominio) => Promise<void>;
    update!: (entity: AbsEntidadeDominio) => Promise<AbsEntidadeDominio>;
    remove!: (entity: AbsEntidadeDominio) => Promise<void>;

}