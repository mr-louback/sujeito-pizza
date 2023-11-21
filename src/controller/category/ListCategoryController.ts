import {Request, Response} from 'express';
import { ListCategoryService } from '../../service/category/ListCategoryService';

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const listCategoryService = new ListCategoryService();
    return res.json(await listCategoryService.execute());
  }
}
export { ListCategoryController }