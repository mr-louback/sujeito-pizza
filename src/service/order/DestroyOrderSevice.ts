import prismaClient from "../../prisma";
interface OrderRequest {
  id: string;
}
class DestroyOrderSevice {
  async execute({ id }: OrderRequest) {
    const orderDestroy = await prismaClient.order.delete({
      where: {
        id
      }
    })
    return orderDestroy
  }
}
export { DestroyOrderSevice }