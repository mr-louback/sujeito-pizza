import { Response, Request } from "express";
import { ListByCategoryService } from "../../service/products/ListByCategoryService";
class ListByCategoryController {
  async handle(res: Response, req: Request) {
    const listByCategoryService = new ListByCategoryService();
    const minhafucao = await listByCategoryService.execute();
    
    return res.json({minhafucao});
  }
}
export { ListByCategoryController }