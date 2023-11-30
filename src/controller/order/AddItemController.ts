import { Request, Response } from "express";
import { AddItemService } from "../../service/order/AddItemService";

class AddItemController {
  async handle(req: Request, res: Response) {
    const { order_id, product_id, amount } = req.body
    return res.json(await new AddItemService().execute({ order_id, product_id, amount }))
  }
}
export { AddItemController }