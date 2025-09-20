import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest, User } from "../models/user.model";


export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
):Promise<void> => {
  const token = req.header("Authorization")?.replace("Bearer ", "").trim();
  if (!token) {
    res.status(401).send("Access Denied");
return ;  
}

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

    const user = await User.findById(decoded.id);
    if (!user) {
        res.status(401).send("User not found");
      return
    }

    req.user = user; 
    next();
  } catch (err) {
      res.status(400).send("Invalid token");
    return; 
  }
};
