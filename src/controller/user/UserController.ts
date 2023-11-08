import { Request, response, Response } from "express";
import { UserService } from "../../service/user/UserService";
class UserController {
  async handleCreateUser(req: Request, res: Response) {
    const createUserService = new UserService()
    return res.json(await createUserService.create(req.body));
  }
  async handleReadUser(req: Request, res: Response) {
    const readUserService = new UserService()
    return res.json(await readUserService.read());
  }
  async handleUpdateUser(req: Request, res: Response) {
    const updateUserService = new UserService()
    return res.json(await updateUserService.update(req.body));
  }
  async handleDeleteUser(req: Request, res: Response) { 
    const deleteUserService = new UserService()
    return res.json(await deleteUserService.destroy(req.body));
  }
}
export { UserController };