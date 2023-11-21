import { Request, Response } from "express";
import { AuthService } from "../../service/user/AuthService";
class AuthUserController {
  async handle(req: Request, res: Response) {
    const authService = new AuthService()
    return res.json(await authService.authorize(req.body));
  }
}
export { AuthUserController };