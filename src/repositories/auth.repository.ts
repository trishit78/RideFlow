import { UserDTO } from "../dtos/user.dto";
import { User } from "../models/user.model";


export async function create(userData:UserDTO) {
    const user = new User(userData);
    await user.save();
    return user;
}

export async function findByEmail(email:string) {

    return User.findOne({email});
}