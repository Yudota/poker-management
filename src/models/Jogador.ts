import AbsEntidadeDominio from "./AbsEntidadeDominio";
import Carteira from "./Carteira";
import Endereco from "./Endereco";
import Telefone from "./Telefone";

type JogadorConstructor = {
  id?: string;
  nome: string;
  dataNascimento: string;
  apelido: string;
  email: string;
  cpf: string;
  senha: string;
  telefone: Telefone;
  carteira: Carteira;
  endereco: Endereco;
}
export default class Jogador extends AbsEntidadeDominio {

  private _nome: string;
  private _dataNascimento: string;
  private _apelido: string;
  private _email: string;
  private _cpf: string;
  private _senha: string;
  private _telefone: Telefone;
  private _carteira: Carteira;
  private _endereco: Endereco;

  constructor({
    nome,
    dataNascimento,
    apelido,
    email,
    cpf,
    senha,
    telefone,
    carteira,
    endereco,
    id
  }: JogadorConstructor) {
    super(id)
    this._nome = nome;
    this._dataNascimento = dataNascimento;
    this._apelido = apelido;
    this._email = email;
    this._cpf = cpf;
    this._senha = senha;
    this._carteira = carteira;
    this._endereco = endereco;
    this._telefone = telefone;
  }
  get nome(): string {
    return this._nome;
  }
  set nome(nome: string) {
    this._nome = nome;
  }

  get dataNascimento(): string {
    return this._dataNascimento;
  }
  set dataNascimento(dataNascimento: string) {
    this._dataNascimento = dataNascimento;
  }

  get apelido(): string {
    return this._apelido;
  }
  set apelido(apelido: string) {
    this._apelido = apelido;
  }

  get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

  get cpf(): string {
    return this._cpf;
  }
  set cpf(cpf: string) {
    this._cpf = cpf;
  }
  get senha(): string {
    return this._senha;
  }
  set senha(senha: string) {
    this._senha = senha;
  }

  get carteira(): Carteira {
    return this._carteira;
  }
  set carteira(carteira: Carteira) {
    this._carteira = carteira;
  }

  get endereco(): Endereco {
    return this._endereco;
  }
  set endereco(endereco: Endereco) {
    this._endereco = endereco;
  }

  get telefone(): Telefone {
    return this._telefone;
  }
  set telefone(telefone: Telefone) {
    this._telefone = telefone;
  }

}
