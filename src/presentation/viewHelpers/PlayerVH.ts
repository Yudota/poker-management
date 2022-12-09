import AbsEntidadeDominio from "../../models/AbsEntidadeDominio";
import Carteira from "../../models/Carteira";
import Cidade from "../../models/Cidade";
import Endereco from "../../models/Endereco";
import Estado from "../../models/Estado";
import Jogador from "../../models/Jogador";
import Telefone from "../../models/Telefone";
import IViewHelper from "./IViewHelper";
import { Request } from "express";

export class PlayerVH implements IViewHelper {
  constructor() {
  }
  getEntidade(req: Request) {
    const {
      id,
      nome,
      dataNascimento,
      apelido,
      email,
      cpf,
      senha,
      ddd,
      numeroTelefone,
      saldo,
      logradouro,
      tipoLogradouro,
      numeroEndereco,
      nomeCidade,
      bairro,
      complemento,
      cep,
      nomeEstado,
    } = req.body;

    const estado = new Estado({ nomeEstado });
    const cidade = new Cidade(nomeCidade, estado);
    const end = new Endereco(
      tipoLogradouro,
      logradouro,
      numeroEndereco,
      bairro,
      cep,
      complemento,
      cidade,
      estado
    );
    const tel = new Telefone(ddd, numeroTelefone);
    const cart = new Carteira(saldo);

    const jogador = new Jogador(
      nome,
      dataNascimento,
      apelido,
      email,
      cpf,
      senha,
      tel,
      cart,
      end,
      id
    );

    return jogador;
  }
  setEntidadeToJSON(ed: AbsEntidadeDominio) {
    const response = JSON.stringify({ ...ed });

    return response
  }
}
