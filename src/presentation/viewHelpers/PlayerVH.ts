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
  getEntidade(req: Request) {
    const {
      nome,
      dataNascimento,
      apelido,
      email,
      cpf,
      senha,
      ddd,
      numero,
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
    const id = "55"
    
    const estado = new Estado(id,nomeEstado);
    const cidade = new Cidade(id ,nomeCidade, estado);
    const end = new Endereco(
      id,
      tipoLogradouro,
      logradouro,
      numeroEndereco,
      bairro,
      cep,
      complemento,
      cidade
    );
    const tel = new Telefone(id, ddd, numero);
    const cart = new Carteira(saldo, id);

    const jogador = new Jogador(
      id,
      nome,
      dataNascimento,
      apelido,
      email,
      cpf,
      senha,
      tel,
      cart,
      end
    );

    return jogador;
  }
  setEntidade() {}
}
