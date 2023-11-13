import { Request, Response } from "express";
import { UserService } from "../../service/user/UserService";
class UserController {
  async handleCreateUser(req: Request, res: Response) {
    const createUserService = new UserService()
    return res.json(await createUserService.createUser(req.body));
  }
  
}
export { UserController };