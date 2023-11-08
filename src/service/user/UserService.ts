import prisma from "../../prisma";
import { hash } from "bcryptjs";
interface UserRequest {
  name: string;
  email: string;
  password: string;
  id?: string;
}
class UserService {
  // create
  async create({ name, email, password }: UserRequest) {
    const emailValidation = ["@gmail.com", "@outlook.com"];
    const passwordHash = await hash(password, 8);

    // || !email.includes(emailValidation[0] && emailValidation[1])
    if (!email || "") {
      throw new Error("Email incorrect");
    }
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email: email
      }
    })
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
        email: true
      }
    })
    return { message: "User created successfully", user };
  }
  // read 
  async read() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true
      }
    })
    return { message: "Users listed successfully", users };
  }
  // update
  async update({ id, name, email }: UserRequest) {
    // const password = await bcrypt.hash(password, 8); 
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        id: id
      }
    })
    if (!userAlreadyExists) {
      throw new Error("User not exists");
    }

    const userUpdated = await prisma.user.update({
      where: {
        id: id
      },
      data: {
        name: name,
        email: email
      }
    })
    return { message: "User updated successfully", userUpdated };
  }
  // delete
  async destroy({ id }: UserRequest) {
    // const password = await bcrypt.hash(password, 8); 
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        id: id
      }
    })
    if (userAlreadyExists) {
      await prisma.user.delete({
        where: {
          id: id
        }
      })
      return { message: "User deleted successfully" };
    }
    throw new Error("User not exists");

  }
}
export { UserService };