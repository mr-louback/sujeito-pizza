import { Request, Response } from "express";
import { AuthService } from "../../service/user/AuthService";
class AuthController {
  async handleAuthUser(req: Request, res: Response) {
    const authService = new AuthService()
    return res.json(await authService.authorize(req.body));
  }
}
export { AuthController };