import prismaClient from "../../prisma";
interface ProductsRequest {
  name: string;
  description: string;
  price: string;
  banner: string;
  category_id: string;
}
class ProductService {
  async execute({ name, description, price, banner, category_id }: ProductsRequest) {

    const createProduct = await prismaClient.product.create({
      data: {
        name,
        description,
        price,
        banner,
        category_id,
      },
    });
    return createProduct;
  }
}
export { ProductService }