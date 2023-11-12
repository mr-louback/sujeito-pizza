import { Response, Request } from "express";
import { ListByCategoryService } from "../../service/products/ListByCategoryService";
class ListByCategoryController {
  async handle(res: Response, req: Request) {
    const category_id = req.query.category_id
    const urlSearchParams = new URLSearchParams(req.params)
    console.log(category_id);
    console.log(urlSearchParams);
    return 
    // const listProductService = new ListByCategoryService()
    // return res.json(await listProductService.execute({
    //   category_id
    // }))
  }
}
export { ListByCategoryController }