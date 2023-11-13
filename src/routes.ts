/**
 * Defines the routes for the application.
 * @module routes
 */
import { Router } from 'express';
import { UserController } from "./controller/user/UserController";
import { AuthController } from "./controller/user/AuthController";
import { DetailsUserController } from './controller/user/DetailsUserController';
import { isAuthenticated } from './middleware/isAuthenticated';
import { CategoryController } from './controller/category/CategoryController';
import { ListCategoryController } from './controller/category/ListCategoryController';
import { ProductController } from './controller/product/ProductController';
import multer from 'multer'
import uploadConfig from './config/multer'
import { ListByCategoryController } from './controller/product/ListByCategoryController';
import { OrderController } from './controller/order/OrderController'
const router = Router();
const upload = multer(uploadConfig.upload('./tmp'));

// users 
router.post('/auth', new AuthController().handleAuthUser);
router.post('/users', new UserController().handleCreateUser);
router.get('/users/me', isAuthenticated, new DetailsUserController().handleDetailsUser);
// categories
router.post('/categories', isAuthenticated, new CategoryController().handleCreateCategory);
router.get('/categories', isAuthenticated, new ListCategoryController().handleListCategory);
// products
router.post('/product', isAuthenticated, upload.single('file'), new ProductController().handleProduct);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)
// orders
router.post('/order', isAuthenticated, new OrderController().handleOrder)


export { router }
