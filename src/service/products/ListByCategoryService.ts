import prismaClient from "../../prisma";
interface ListRequest {
  category_id: string;
}
interface ListResponse {
  id: string;
  name: string;
  description: string;
  price: string;
  banner: string;
  category_id: string;
  items: string;
}
class ListByCategoryService {
  async execute({ category_id }: ListRequest) {

    // const listByCategory = await prismaClient.product.findMany({
    //   where: {
    //     category_id
    //   },
    //   select: {
    //     id: true,
    //     name: true,
    //     description: true,
    //     price: true,
    //     banner: true,
    //     category_id: true,
    //     items: true,
    //   }
    // })
    // return listByCategory;
    return { ok: true }
  }
}
export { ListByCategoryService }