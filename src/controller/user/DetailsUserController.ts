import { DetailsUserService } from "../../service/user/DetailsUserService";
import { Request, Response } from "express";
class DetailsUserController {
  async handle(req: Request, res: Response) {
    const detailsUserService = new DetailsUserService();
    return res.status(202).json(await detailsUserService.execute(req.user_id));

  }
}
export { DetailsUserController }