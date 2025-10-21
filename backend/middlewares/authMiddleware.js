
import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";

export const authMiddleware = async (
  req,
  res,
  next
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "").trim();
  if (!token) {
    res.status(401).send("Access Denied");
return ;  
}

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

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
