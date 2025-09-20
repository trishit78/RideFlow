
import { Request } from "express";
import mongoose, { Document, Schema } from "mongoose";
export interface ILocation extends Document{
    type:'Point',
    coordinates:number[]
}

export interface AuthRequest extends Request {
  user?: IUser;
}
export interface IUser extends Document{
    name:string,
    email:string,
    password:string,
    role:"driver"| "passenger",
    location:ILocation,

}

export const userSchema = new Schema<IUser>({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    unique:true,
    required:true,
    trim:true
  },
  password:{
    type:String,
    required:true,

  },
  role:{
    type:String,
    enum:{
        values:['driver','passenger'],
        message:"invalid role type"
    },
    required:[true,"Invalid role"]
  },
  location:{
    type:{
        type:String,
        enum:['Point'],
        default:'Point',
        required:true
    },
    coordinates:{
        type:[Number],
        default:[0,0]
    }
  }
});

export const User = mongoose.model<IUser>('User',userSchema)

