import { User } from "../models/userSchema.js";


export async function create(userData) {
    const user = new User(userData);
    await user.save();
    return user;
}

export async function findByEmail(email) {

    return User.findOne({email});
}

export async function updateDriverLocation(driverId,location) {
    return User.findByIdAndUpdate(driverId,{location},{
        new:true
    })
}