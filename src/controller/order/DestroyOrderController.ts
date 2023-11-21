import { Request, Response } from 'express'
import { DestroyOrderSevice } from '../../service/order/DestroyOrderSevice'
class DestroyOrderController {
  async handle(req: Request, res: Response){
    const id = req.query.order_id as string
    return (res.json(await new DestroyOrderSevice().execute({id})))
  }
}
export { DestroyOrderController }