import mongoose, { model, Schema } from "mongoose";


const bookingSchema = new Schema({
  passenger: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
  
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
