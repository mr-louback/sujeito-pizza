import prismaClient from "../../prisma";
interface OrderRequest {
  name: string;
  table: string;
  status: boolean;
  draft: boolean;
  // items: string;
}
class CreateOrderService {
  async execute({ name, table, status, draft }: OrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        table,
        name,
        status,
        draft
      }
    });
    return order;
  }
}
export { CreateOrderService };