
import mongoose, {  Schema } from "mongoose";


export const userSchema = new Schema({
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

export const User = mongoose.model('User',userSchema)

