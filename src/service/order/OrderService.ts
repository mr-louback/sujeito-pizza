import prismaClient from "../../prisma";
interface OrderRequest {
  name: string;
  table: string;
  status: string;
  draft: boolean;
  items: string;
}
class OrderService {
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
    // return { ok: true }
  }
}
export { OrderService };