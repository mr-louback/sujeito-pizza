import prismaClient from "../../prisma";
class DetailsUserService {
    async execute(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        });
        if (!user) {
            throw new Error("User not exists");
        }
        return user;

    }
}
export { DetailsUserService };