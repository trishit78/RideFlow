import { createBookingService } from "../services/booking.service.js";




export const createBookingHandler = async (req,res)=> {
    try {
        
    const {source,destination} =req.body;
    
    const booking=await createBookingService({passengerId:req.user?._id,source,destination});

    res.status(201).send({
        data:{booking,
            success:true,
            error:null,
            message:"success"
        }
    })
    
} catch (error) {
 console.log('error in controller',error);       
}
}