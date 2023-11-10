"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
/**
 * Defines the routes for the application.
 * @module routes
 */
const express_1 = require("express");
const UserController_1 = require("./controller/user/UserController");
const AuthController_1 = require("./controller/user/AuthController");
const DetailsUserController_1 = require("./controller/user/DetailsUserController");
const isAuthenticated_1 = require("./middleware/isAuthenticated");
const CategoryController_1 = require("./controller/category/CategoryController");
const ListCategoryController_1 = require("./controller/category/ListCategoryController");
const router = (0, express_1.Router)();
exports.router = router;
// users 
router.post('/auth', new AuthController_1.AuthController().handleAuthUser);
router.post('/users', new UserController_1.UserController().handleCreateUser);
router.get('/users/me', isAuthenticated_1.isAuthenticated, new DetailsUserController_1.DetailsUserController().handleDetailsUser);
// categories
router.post('/categories', isAuthenticated_1.isAuthenticated, new CategoryController_1.CategoryController().handleCreateCategory);
router.get('/categories', isAuthenticated_1.isAuthenticated, new ListCategoryController_1.ListCategoryController().handleListCategory);
