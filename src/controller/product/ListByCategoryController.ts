import { Response, Request } from "express";
import { ListByCategoryService } from "../../service/products/ListByCategoryService";
class ListByCategoryController {
  async handle(res: Response, req: Request) {
    const category_id  = req.query.category_id as string;
    const listByCategoryService = new ListByCategoryService();
    const listByCategory = await listByCategoryService.execute({ category_id });  
    return res.json(listByCategory);
  }
}
export { ListByCategoryController }