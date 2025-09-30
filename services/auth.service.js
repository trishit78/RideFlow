import jwt from 'jsonwebtoken';

import bcrypt from 'bcryptjs';
import { create, findByEmail } from '../repositories/auth.repository.js';
import dotenv from 'dotenv';
dotenv.config();


const JWT_SECRET = process.env.JWT_SECRET;
console.log('jwt secret',JWT_SECRET)

function signToken(userId) {
  return jwt.sign(
    { id: userId },
    JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
      issuer: process.env.JWT_ISSUER || "uber-backend",
      audience: process.env.JWT_AUDIENCE || "uber-clients",
    } 
  );
}


function comparePassword(password, userPassword){
    return bcrypt.compare(password,userPassword);
}


export async function registerService(userData) {
 //   console.log('userdata',userData.user.password)

console.log('service register');

const hashedPassword = await bcrypt.hash(userData.password, 10);

userData.password = hashedPassword;

const user = await create(userData);
    const token = signToken(user._id.toString())
    return {user,token};
}

export async function loginService(userData) {
    const {email,password} = userData;
    const user = await findByEmail(email);
    const ok = user && (await comparePassword(password,user.password));
    if(!ok){
        throw new Error("Invalid email or password");
    }
    const token  = signToken(user._id.toString())
    return {user,token};
}
