import { Response, Request } from "express";
import { ListByCategoryService } from "../../service/products/ListByCategoryService";
class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string 

    const listByCategoryService = new ListByCategoryService();
    return res.json(await listByCategoryService.execute({ category_id }));
  }
}
export { ListByCategoryController }