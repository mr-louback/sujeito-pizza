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

const router = Router();
// users 
router.post('/auth', new AuthController().handleAuthUser);
router.post('/users', new UserController().handleCreateUser);
router.get('/users/me', isAuthenticated, new DetailsUserController().handleDetailsUser);
// categories
router.post('/categories', isAuthenticated, new CategoryController().handleCreateCategory);
router.get('/categories', isAuthenticated, new ListCategoryController().handleListCategory);
// products

export { router }
