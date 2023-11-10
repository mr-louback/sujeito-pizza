"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    const isAuthenticated = req.headers.authorization;
    if (!isAuthenticated) {
        return res.status(401).end();
    }
    const [, token] = isAuthenticated.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET_KEY);
        req.user_id = sub;
        return next();
    }
    catch (_a) {
        return res.status(401).end();
    }
}
exports.isAuthenticated = isAuthenticated;
