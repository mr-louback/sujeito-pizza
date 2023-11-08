import { Request, Response, Router } from 'express';
import { UserController } from "./controller/user/UserController";
import { AuthController } from "./controller/user/AuthController";

const router = Router();
// Login - usuários
router.post('/auth', new AuthController().handleAuthUser);
// CRUD - usuários
router.post('/users', new UserController().handleCreateUser);
router.get('/users', new UserController().handleReadUser);
router.put('/users/update', new UserController().handleUpdateUser);
router.delete('/users/delete', new UserController().handleDeleteUser);
export { router }