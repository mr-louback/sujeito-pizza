import { Request, Response } from "express";
import { DestroyItemService } from '../../service/order/DestroyItemService'
class DestroyItemController {
  async handle(req: Request, res: Response) {
    const item_id = req.query.item_id as string
    return res.json(await new DestroyItemService().execute({ item_id }))
  }
}
export { DestroyItemController }