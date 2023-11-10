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
  // read 
  // async readUser({ id }: UserRequest) {
  //   const users = await prisma.user.findUnique({
  //     where: {
  //       id: id
  //     },
  //     select: {
  //       id: true,
  //       name: true,
  //       email: true
  //     }
  //   })
  //   if (!users) {
  //     throw new Error("User not exists");
  //   }
  //   return { message: "Users listed successfully", users };
  // }
  // // update
  // async updateUser({ id , name, email}: UserRequest) {
  //   // const password = await bcrypt.hash(password, 8); 
  //   const userAlreadyExists = await prisma.user.findFirst({
  //     where: {
  //       id: id
  //     },
  //     select: {
  //       id: true,
  //       name: true,
  //       email: true
  //     }
  //   })
  //   if (!userAlreadyExists) {
  //     throw new Error("User not exists");
  //   }

  //   const userUpdated = await prisma.user.update({
  //     where: {
  //       id: id
  //     },
  //     data: {
  //       name: name,
  //       email: email
  //     }
  //   })
  //   console.log(userUpdated);
    
  //   return { message: "User updated successfully", userUpdated };
  // }
  // // delete
  // async destroyUser({ id }: UserRequest) {
  //   // const password = await bcrypt.hash(password, 8); 
  //   const userAlreadyExists = await prisma.user.findFirst({
  //     where: {
  //       id: id
  //     }
  //   })
  //   if (userAlreadyExists) {
  //     await prisma.user.delete({
  //       where: {
  //         id: id
  //       }
  //     })
  //     return { message: "User deleted successfully" };
  //   }
  //   throw new Error("User not exists");

  // }
}
export { UserService };