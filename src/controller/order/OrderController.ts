import { Request, Response } from "express";
import { OrderService } from "../../service/order/OrderService";
class OrderController {
  async handleOrder(req: Request, res: Response) {
    const { name, table, status, draft, items } = req.body
    return res.json(await new OrderService().execute({name, table, status, draft, items}))
  }
}


export { OrderController }
