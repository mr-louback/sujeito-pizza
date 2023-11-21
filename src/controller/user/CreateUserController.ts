import { Request, Response } from "express";
import { UserService } from "../../service/user/UserService";
class CreateUserController {
  async handle(req: Request, res: Response) {
    const createUserService = new UserService()
    return res.json(await createUserService.createUser(req.body));
  }
  
}
export { CreateUserController };