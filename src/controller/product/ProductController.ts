import { Request, Response } from "express";
import { ProductService } from "../../service/products/ProductService";
class ProductController {
  async handleProduct(req: Request, res: Response) {
    const {
      name,
      description,
      price,
      category_id
    } = req.body
    if (!req.file) {
      throw new Error("File not found");
    }
    else {
      const productService = new ProductService();
      const {originalname, filename: banner} = req.file;
      return res.json(await productService.execute({
        name,
        description,
        price,
        banner,
        category_id
      }
      ));
    }
  }

}
export { ProductController }
// {
//   "name":"produto teste",
//   "description":"descrição teste",
//   "price":"123",
//   "banner":"foto.png",
//   "category_id":"199ccd39-8102-48d9-bbb6-1865da94362b"
// }