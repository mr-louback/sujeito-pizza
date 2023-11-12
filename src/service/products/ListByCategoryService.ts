import prismaClient from "../../prisma";
import { Response } from 'express'
interface ListRequest {
  category_id: string;
}

class ListByCategoryService {
  async execute() {
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
    //     items: true,
    //   }
    // })
    // return listByCategory;
    return { ok: 'true' }



  }
}
export { ListByCategoryService }