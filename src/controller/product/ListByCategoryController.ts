import { Response, Request } from "express";
import { ListByCategoryService } from "../../service/products/ListByCategoryService";
class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string 
    return res.json(await new ListByCategoryService().execute({ category_id }));
  }
}
export { ListByCategoryController }