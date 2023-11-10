import crypt from 'crypto'
import prismaClient from '../../prisma'
import { sign } from 'jsonwebtoken'
import { compare } from 'bcryptjs'
interface AuthRequest {
  email: string;
  password: string;
}
class AuthService {
  async authorize({ email, password }: AuthRequest) {
    //
    const userExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })
    if (!userExists) {
      throw new Error("Email/Password incorrect");
    }
    //
    const passwordMatch = await compare(password, userExists.password);
    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }
    //
     
    const token = sign
      (
        {
          name: userExists.name,
          email: userExists.email
        },
        process.env.JWT_SECRET_KEY,
        {
          subject: userExists.id,
          expiresIn: "30d"
        }
      )
    return { message: "User Authorized successfully", userData: { id: userExists.id, name: userExists.name, email: userExists.email, token } };
  }
}
export { AuthService };