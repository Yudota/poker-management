import { Request, Response } from "express";
import { ICommand } from "../../commands/ICommand";
import { IViewHelper } from "../vh/IViewHelper";
import { MethodRequestTypes } from "./RequesType";
import { ViewHelperPlayer } from "../View/ViewHelperPlayer";
import { ListAllCommand } from "../../commands/ListAllCommand";

export class Controller {
  private _url: string;
  private _operacao: string;
  private commands: Map<String, ICommand>;
  private viewHelpers: Map<String, IViewHelper>;
  private vh: IViewHelper | undefined = undefined;
  private cmd: ICommand | undefined = undefined;
  constructor() {
    this._url = "";
    this._operacao = "";

    this.handle = this.handle.bind(this);
    this.commands = new Map<String, ICommand>();
    this.commands.set(MethodRequestTypes.GET, new ListAllCommand());

    this.viewHelpers = new Map<String, IViewHelper>();
    this.viewHelpers.set("/players", new ViewHelperPlayer());
  }
  async handle(req: Request, resp: Response) {
    this._url = req.url;
    this._operacao = req.method;

    this.vh = this.viewHelpers.get(this._url);
    const entidade = this.vh?.getEntidade(req);

    this.cmd = this.commands.get(this._operacao);

    this.cmd?.executar(entidade);
  }
}
