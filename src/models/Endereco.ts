import AbsEntidadeDominio from "./AbsEntidadeDominio";
import Cidade from "./Cidade";
import Estado from "./Estado";
export default class Endereco extends AbsEntidadeDominio {
  private _tipoLogradouro: string;
  private _logradouro: string;
  private _numeroEndereco: string;
  private _bairro: string;
  private _cep: string;
  private _complemento: string;
  private _cidade: Cidade;
  private _estado: Estado;

  constructor(
    tipoLogradouro: string,
    logradouro: string,
    numeroEndereco: string,
    bairro: string,
    cep: string,
    complemento: string,
    cidade: Cidade,
    estado: Estado
  ) {
    super()
    this._tipoLogradouro = tipoLogradouro
    this._logradouro = logradouro
    this._numeroEndereco = numeroEndereco
    this._bairro = bairro
    this._cep = cep
    this._complemento = complemento
    this._cidade = cidade
    this._estado = estado
  }
  get tipoLogradouro(): string {
    return this._tipoLogradouro
  }
  set tipoLogradouro(val: string) {
    this._tipoLogradouro = val
  }
  get logradouro(): string {
    return this._logradouro
  }
  set logradouro(val: string) {
    this._logradouro = val
  }
  get numeroEndereco(): string {
    return this._numeroEndereco
  }
  set numeroEndereco(val: string) {
    this._numeroEndereco = val
  }
  get bairro(): string {
    return this._bairro
  }
  set bairro(val: string) {
    this._bairro = val
  }
  get cep(): string {
    return this._cep
  }
  set cep(val: string) {
    this._cep = val
  }
  get compĺemento(): string {
    return this._complemento
  }
  set compĺemento(val: string) {
    this._complemento = val
  }
  get cidade(): Cidade {
    return this._cidade
  }
  set cidade(val: Cidade) {
    this._cidade = val
  }
  get estado(): Estado {
    return this._estado
  }
  set estado(val: Estado) {
    this._estado = val
  }
}
