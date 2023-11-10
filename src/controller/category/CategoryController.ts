import {Request, Response} from 'express';
import { CategoryService } from '../../service/category/CategoryService';
import { ListCategoryService } from '../../service/category/ListCategoryService';

class CategoryController {
  async handleCreateCategory(req: Request, res: Response) {
    const categoryService = new CategoryService();
    return res.json(await categoryService.execute(req.body));
  }
  async handleListCategory(req: Request, res: Response) {
    const listCategoryService = new ListCategoryService();
    return res.json(await listCategoryService.execute());
  }
}
export { CategoryController }