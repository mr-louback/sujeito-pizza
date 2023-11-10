import prismaClient from "../../prisma";
interface CategoryRequest {
  name: string;
}
class CategoryService {
  async execute({ name }: CategoryRequest) {
    if (name === '') {
      throw new Error('Name is empty');
    }
    const category = await prismaClient.category.create({
      data: {
        name
      },
      select: {
        id: true,
        name: true,
        created_at: true,
        updated_at: true
      }
    });
    return category;
  }
}
export { CategoryService };