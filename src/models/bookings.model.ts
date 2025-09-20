import mongoose, { model, Schema, Types } from "mongoose";


export type IBooking={
    passenger: Types.ObjectId | string,
    driver: Types.ObjectId | string,
    source:{
        latitude: number
    longitude:number
    },
    destination:{
        latitude: number
    longitude:number
    },
    fare:number,
    status:"pending"|"confirmed"|"completed"|"cancelled",
    feedback?:string,
    rating?:string,
    distance:number
}


const bookingSchema = new Schema({
  passenger: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required:true
},
  driver: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: "User", default: null,
     
     },
  source: {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  destination: {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  fare:
  {

     type: Number,

  } ,
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending",
  },
  feedback: {
    type: String,
    trim: true,
  },
  rating: {
    type: String,
  },
  distance: {
    type: Number,
  },
});

export const Booking = model("Booking", bookingSchema);
