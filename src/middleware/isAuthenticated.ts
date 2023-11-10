import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
interface PayLoad {
  sub: string;
}
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const isAuthenticated = req.headers.authorization;
  if (!isAuthenticated) {
    return res.status(401).end();
  }
  const [, token] = isAuthenticated.split(" ");
  try {
    const { sub } = verify(token, process.env.JWT_SECRET_KEY) as PayLoad;
    req.user_id = sub;
    return next()
  } catch {
    return res.status(401).end();
  }
}