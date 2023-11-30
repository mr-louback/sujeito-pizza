import prismaClient from "../../prisma";
interface ItemRequest {
  item_id: string;
}
class DestroyItemService {
  async execute({ item_id }: ItemRequest) {
    const destroyProduct = await prismaClient.item.delete({
      where: {
        id: item_id,
      }
    })
    return destroyProduct
  }
}
export {DestroyItemService}