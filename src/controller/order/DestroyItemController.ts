import { Request, Response } from "express";
import { DestroyItemService } from '../../service/order/DestroyItemService'
class DestroyItemController {
  async handle(req: Request, res: Response) {
    const { product_id } = req.body
    return res.json(await new DestroyItemService().execute({ product_id }))
  }
}
export { DestroyItemController }