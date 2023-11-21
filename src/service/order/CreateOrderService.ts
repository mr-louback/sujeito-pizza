import prismaClient from "../../prisma";
interface OrderRequest {
  name: string;
  table: string;
  status: string;
  draft: boolean;
  items: string;
}
class CreateOrderService {
  async execute({ name, table, status, draft, items }: OrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        table,
        name,
        status,
        draft,
        items
      }
    });
    return order;
  }
}
export { CreateOrderService };