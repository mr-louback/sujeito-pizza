import { Request, Response } from "express";
import { CreateOrderService } from "../../service/order/CreateOrderService";
class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { name, table, status, draft } = req.body
    return res.json(await new CreateOrderService().execute({name, table, status, draft}))
  }
}


export { CreateOrderController }
