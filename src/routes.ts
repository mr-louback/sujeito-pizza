import { Router } from 'express';
import { UserController } from "./controller/user/UserController";
import { AuthController } from "./controller/user/AuthController";
import { DetailsUserController } from './controller/user/DetailsUserController';
import { isAuthenticated } from './middleware/isAuthenticated';

const router = Router();
// Login - usuários 
router.post('/auth', new AuthController().handleAuthUser);
// CRUD - usuários
router.post('/users/create', new UserController().handleCreateUser);
//
router.get('/users/me', isAuthenticated, new DetailsUserController().handleDetailsUser);
// //
// router.put('/users/update', new UserController().handleUpdateUser);
// //
// router.delete('/users/delete', new UserController().handleDeleteUser);
export { router }
