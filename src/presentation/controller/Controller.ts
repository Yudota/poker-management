import { Request, Response } from "express";
import { ICommand } from "../../commands/ICommand";
import { MethodRequestTypes } from "./RequesType";
import { ListarCommand } from "../../commands/implementacao/ConsultarCommand";
import IViewHelper from "../viewHelpers/IViewHelper";
import { PlayerVH } from "../viewHelpers/PlayerVH";
import { SalvarCommand } from "../../commands/implementacao/CriarCommand";
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
  async handle(req: Request, res: Response) {
    this._url = req.url;
    this._operacao = req.method;
    this.vh = this.viewHelpers.get(this._url);
    const entidade = this.vh!.getEntidade(req);

    this.cmd = this.commands.get(this._operacao);

    const result = await this.cmd?.executar(entidade);
    if (result!.erro > 0) {
      return res.status(400).json(result);
    }
    if (req.method === MethodRequestTypes.GET) {
      return res.status(200).json(result);
    }
    return res.status(201).json(result);
  }
}
