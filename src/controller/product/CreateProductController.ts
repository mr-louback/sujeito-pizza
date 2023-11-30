import { Request, Response } from "express";
import { ProductService } from "../../service/products/ProductService";
class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, description, price, category_id } = req.body

    if (!req.file) {
      throw new Error("File not found");
    }

    const productService = new ProductService();
    const { originalname, filename: banner } = req.file;
    return res.json(await productService.execute({ name, description, price, banner, category_id }));
  }

}
export { CreateProductController }
