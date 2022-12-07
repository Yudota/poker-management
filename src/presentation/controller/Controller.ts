import { Request, Response } from "express";
import { ICommand } from "../../commands/ICommand";
import { MethodRequestTypes } from "./RequesType";
import { ListarCommand } from "../../commands/implementacao/ListarCommand";
import IViewHelper from "../viewHelpers/IViewHelper";
import { PlayerVH } from "../viewHelpers/PlayerVH";
import { SalvarCommand } from "../../commands/implementacao/SalvarCommand";
import { AtualizarCommand } from "../../commands/implementacao/AtualizarCommand";
import { DeletarCommand } from "../../commands/implementacao/DeletarCommand";
export class Controller {
  private _url!: string;
  private _operacao!: string;
  private commands: Map<String, ICommand>;
  private viewHelpers: Map<String, IViewHelper>;
  private vh: IViewHelper | undefined = undefined;
  private cmd: ICommand | undefined = undefined;
  constructor() {
    this.handle = this.handle.bind(this);
    this.commands = new Map<String, ICommand>();
    this.commands.set(MethodRequestTypes.GET, new ListarCommand());
    this.commands.set(MethodRequestTypes.POST, new SalvarCommand());
    this.commands.set(MethodRequestTypes.PUT, new AtualizarCommand());
    this.commands.set(MethodRequestTypes.DELETE, new DeletarCommand());

    this.viewHelpers = new Map<String, IViewHelper>();
    this.viewHelpers.set("/player", new PlayerVH());
  }
  async handle(req: Request) {
    this._url = req.url;
    this._operacao = req.method;
    this.vh = this.viewHelpers.get(this._url);
    const entidade = this.vh!.getEntidade(req);

    this.cmd = this.commands.get(this._operacao);

    this.cmd?.executar(entidade);
  }
}
