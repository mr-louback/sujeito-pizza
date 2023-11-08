import { Request, response, Response } from "express";
import { AuthService } from "../../service/user/AuthService";
class AuthController {
  async handleAuthUser(req: Request, res: Response) {
    const authService = new AuthService()
    return res.json(await authService.authorize(req.body));
  }

  // async handleReadUser(req: Request, res: Response) {
  //   const readUserService = new UserService()
  //   return res.json(await readUserService.read());
  // }
  // async handleUpdateUser(req: Request, res: Response) {
  //   const updateUserService = new UserService()
  //   return res.json(await updateUserService.update(req.body));
  // }
  // async handleDeleteUser(req: Request, res: Response) { 
  //   const deleteUserService = new UserService()
  //   return res.json(await deleteUserService.destroy(req.body));
  // }
}
export { AuthController };