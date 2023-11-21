/**
 * Defines the routes for the application.
 * @module routes
 */
import { Router } from 'express';
import { CreateUserController } from "./controller/user/CreateUserController";
import { AuthUserController } from "./controller/user/AuthUserController";
import { DetailsUserController } from './controller/user/DetailsUserController';
import { isAuthenticated } from './middleware/isAuthenticated';
import { CreateCategoryController } from './controller/category/CreateCategoryController';
import { ListCategoryController } from './controller/category/ListCategoryController';
import { CreateProductController } from './controller/product/CreateProductController';
import multer from 'multer'
import uploadConfig from './config/multer'
import { ListByCategoryController } from './controller/product/ListByCategoryController';
import { CreateOrderController } from './controller/order/CreateOrderController'
import { DestroyOrderController } from './controller/order/DestroyOrderController'
const router = Router();
const upload = multer(uploadConfig.upload('./tmp'));

// users 
router.post('/auth', new AuthUserController().handle);
router.post('/users', new CreateUserController().handle);
router.get('/users/me', isAuthenticated, new DetailsUserController().handle);
// categories
router.post('/categories', isAuthenticated, new CreateCategoryController().handle);
router.get('/categories', isAuthenticated, new ListCategoryController().handle);
// products
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)
// orders
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new DestroyOrderController().handle)


export { router }
