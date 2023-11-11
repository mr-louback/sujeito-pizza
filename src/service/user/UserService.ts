import prisma from "../../prisma";
import { hash } from "bcryptjs";
interface UserRequest {
  name: string;
  email: string;
  password: string;
}
class UserService {
  // create
  async createUser({ name, email, password }: UserRequest) {
    const emailValidation = ["@gmail.com", "@outlook.com"];
    const passwordHash = await hash(password, 8);

    // || !email.includes(emailValidation[0] && emailValidation[1])

    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email: email
      }
    })
    if (!email || email == "") {
      throw new Error("Email incorrect");
    }
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash
      },
      select: {
        id: true,
        name: true,
        email: true,
      }
    })
    return { message: "User created successfully", user };
  }
 
}
export { UserService };