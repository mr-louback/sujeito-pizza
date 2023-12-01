import { Request, Response } from "express";
import { ListOrdersService } from "../../service/order/ListOrdersService";
class ListOrdersController {
  async handle(req: Request, res: Response) {
    return res.json(await new ListOrdersService().execute())
  }
}
export { ListOrdersController }