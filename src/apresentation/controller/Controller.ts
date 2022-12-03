import { ICommand } from "../../commands/ICommand";
import { IViewHelper } from "../vh/IViewHelper";

export class Controller {
  private _url: string;
  private _operacao: string;
  private commands = Map<string, ICommand>;
  private viewHelper = Map<string, IViewHelper>;
  constructor() {
    this._url = "";
    this._operacao = "";

  }
  async doGet(req: Request, resp: Response) {
    this._url = req.url;
    this._operacao = req.method;
    console.log(req.method);
    
  }
}
