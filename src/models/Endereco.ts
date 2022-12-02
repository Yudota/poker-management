import AbsEntidadeDominio from "./AbsEntidadeDominio";
import Cidade from "./Cidade";
import Estado from "./Estado";

type EnderecoConstructor = {
  tipoLogradouro: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cep: string;
  complemento: string;
  cidade: Cidade;
  estado: Estado;
  id?: string;
}
export default class Endereco extends AbsEntidadeDominio {
  private _tipoLogradouro: string;
  private _logradouro: string;
  private _numero: string;
  private _bairro: string;
  private _cep: string;
  private _complemento: string;
  private _cidade: Cidade;
  private _estado: Estado;

  constructor(
    {
      tipoLogradouro,
      logradouro,
      numero,
      bairro,
      cep,
      complemento: compĺemento = 'n/a',
      cidade,
      estado,
      id
    }: EnderecoConstructor) {
    super(id)
    this._tipoLogradouro = tipoLogradouro
    this._logradouro = logradouro
    this._numero = numero
    this._bairro = bairro
    this._cep = cep
    this._complemento = compĺemento
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
  get numero(): string {
    return this._numero
  }
  set numero(val: string) {
    this._numero = val
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
  get id(): string {
    return super.id || ''
  }
  set id(val: string) {
    super.id = val
  }
}

// const teste = new Endereco({
//   // id: 'testeId',
//   tipoLogradouro: 'teste',
//   logradouro: 'logradouro',
//   numero: 'numero',
//   bairro: 'bairro',
//   cep: 'cep',
//   compĺemento: 'sei lá',
//   cidade: new Cidade({ descricao: 'mogi das cruzes' }),
//   estado: new Estado({ descricao: 'São Paulo', sigla: 'SP' }),
// } as EnderecoConstructor);

// console.log('id mogi? ', teste.id)