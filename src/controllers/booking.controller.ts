import {  Response } from "express";
import { createBookingService } from "../services/bookings.service";
import { AuthRequest } from "../models/user.model";

// export interface AuthRequest extends Request {
//   user: {
//     _id: string;
//     role: "driver" | "passenger";
    
//   };
// }



export async function createBookingHandler(req:AuthRequest,res:Response) {
    const {source,destination,driver} =req.body;
    // create a booking

    const booking = createBookingService({passengerId:driver,source,destination});

    res.status(201).json({
        success:true,
        data:{booking}
    })


}