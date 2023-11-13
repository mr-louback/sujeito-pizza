import prismaClient from "../../prisma";
interface ListRequest {
  category_id: string
}
class ListByCategoryService {
  async execute({category_id} : ListRequest) {
    const listResult = await prismaClient.product.findMany({
      where: { category_id },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        banner: true,
      }
    });
    return listResult;
  }
}
export { ListByCategoryService }