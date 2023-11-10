"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const jsonwebtoken_1 = require("jsonwebtoken");
const bcryptjs_1 = require("bcryptjs");
class AuthService {
    authorize({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            //
            const userExists = yield prisma_1.default.user.findFirst({
                where: {
                    email: email
                }
            });
            if (!userExists) {
                throw new Error("Email/Password incorrect");
            }
            //
            const passwordMatch = yield (0, bcryptjs_1.compare)(password, userExists.password);
            if (!passwordMatch) {
                throw new Error("Email/Password incorrect");
            }
            //
            const token = (0, jsonwebtoken_1.sign)({
                name: userExists.name,
                email: userExists.email
            }, process.env.JWT_SECRET_KEY, {
                subject: userExists.id,
                expiresIn: "30d"
            });
            return { message: "User Authorized successfully", userData: { id: userExists.id, name: userExists.name, email: userExists.email, token } };
        });
    }
}
exports.AuthService = AuthService;
