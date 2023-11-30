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
    const createProduct = await prismaClient.product.create(
      {
        data: { name, description, price, banner, category_id },
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          banner: true,
          category_id: true,
          items: true
        }
      }
    );
    return createProduct;
  }
}
export { ProductService }