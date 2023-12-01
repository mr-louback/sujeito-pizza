import { SendOrderService } from '../../service/order/SendOrderService'
import { Request, Response } from 'express'
class SendOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body
    return res.json(await new SendOrderService().execute({ order_id }))
  }
}
export { SendOrderController }