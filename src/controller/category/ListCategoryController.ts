import {Request, Response} from 'express';
import { ListCategoryService } from '../../service/category/ListCategoryService';

class ListCategoryController {
  async handleListCategory(req: Request, res: Response) {
    const listCategoryService = new ListCategoryService();
    return res.json(await listCategoryService.execute());
  }
}
export { ListCategoryController }