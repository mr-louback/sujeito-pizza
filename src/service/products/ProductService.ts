import { Omit } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";
interface ProductsRequest {
  name: string;
  description: string;
  price: string;
  banner: string;
  category_id: string;
  items: string;

}
interface ProductResponse {
  id: string;
  name: string;
  description: string;
  price: string;
  banner: string;
  category_id: string; 
}
class ProductService {
  async execute({ name, description, price, banner, category_id,items }: ProductsRequest) {
    try {
      const createProduct = await prismaClient.product.create(
        {
          data: { name, description, price, banner, category_id,items },
          select: {
            id: true,
            name: true,
            description: true,
            price: true,
            banner: true,
            category_id: true,

          }
        }
      );
      return createProduct;
    } catch (error) {
      throw new Error(`Erro ao criar produto: ${error}`);
    }
  }
}
export { ProductService }