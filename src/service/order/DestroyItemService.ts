import prismaClient from "../../prisma";
interface ItemRequest {
  product_id: string;
}
class DestroyItemService {
  async execute({ product_id }: ItemRequest) {
    const destroyProduct = await prismaClient.item.delete({
      where: {
        id: product_id,
      }
    })
    return destroyProduct
  }
}
export {DestroyItemService}