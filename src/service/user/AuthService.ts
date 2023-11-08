import prismaClient from '../../prisma'
import { sign } from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import  crypto  from 'crypto'
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
    const cryotgrafyCrypto = crypto.randomBytes(32)
    const token = sign
      (
        {
          email: userExists.email
        },
        cryotgrafyCrypto,
        {
          subject: userExists.id,
          expiresIn: "1d"
        }
      )
      const processEnv = process.env.JWT_SECRET
      // console.log(cryotgrafyCrypto);
      console.log(token, processEnv);


      
      
    return { message: "User Authorized successfully" };
  }
}
export { AuthService };