import {Request, Response} from 'express';
import { CategoryService } from '../../service/category/CategoryService';
import { ListCategoryService } from '../../service/category/ListCategoryService';

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const categoryService = new CategoryService();
    return res.json(await categoryService.execute(req.body));
  }
}
export { CreateCategoryController }