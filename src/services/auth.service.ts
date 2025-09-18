import jwt from 'jsonwebtoken';
import { loginDataDTO, UserDTO } from '../dtos/user.dto';
import { create, findByEmail } from '../repositories/auth.repository';
import bcrypt from 'bcryptjs';



const JWT_SECRET = process.env.JWT_SECRET!;
function signToken(userId: string) {
  return jwt.sign(
    { id: userId },
    JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
      issuer: process.env.JWT_ISSUER || "uber-backend",
      audience: process.env.JWT_AUDIENCE || "uber-clients",
    } as jwt.SignOptions 
  );
}


function comparePassword(password:string, userPassword:string){
    return bcrypt.compare(password,userPassword);
}


export async function registerService(userData:UserDTO) {
 //   console.log('userdata',userData.user.password)
const hashedPassword = await bcrypt.hash(userData.password, 10);

userData.password = hashedPassword;

const user = await create(userData);
    const token = signToken((user as { _id: { toString: () => string } })._id.toString());
    return {user,token};
}

export async function loginService(userData:loginDataDTO) {
    const {email,password} = userData;
    const user = await findByEmail(email);
    const ok = user && (await comparePassword(password,user.password));
    if(!ok){
        throw new Error("Invalid email or password");
    }
    const token  = signToken((user as { _id: { toString: () => string } })._id.toString());
    return {user,token};
}
