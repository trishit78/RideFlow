import axios from "axios";
import { createBookingService, findNearByDrivers } from "../services/booking.service.js";
import locationService from "../services/location.service.js";




export const createBookingHandler = async (req,res)=> {
    try {
        
    const {source,destination} =req.body;
    
    const booking=await createBookingService({passengerId:req.user?._id,source,destination});

    const nearbyDrivers = await findNearByDrivers(source);
    
    console.log('nearby drivers',nearbyDrivers);
    const driverIds = nearbyDrivers.map(driver =>driver[0])
    const rideInfo = {
        source,destination,passengerId:req.user._id,
        estimatedFare:booking.fare,
        distance:booking.distance,
        pickupTime:new Date().toISOString()
    }
    //console.log('ride info',rideInfo);

    try {
        const notificationResponse = await axios.post('http://localhost:3001/api/notify-drivers',{
            rideId:booking._id.toString(),
            rideInfo,
            driverIds
        });
        await locationService.storedNotifiedDrivers(booking._id,driverIds);
        console.log('Notification sent successfully', notificationResponse.data);

    } catch (error) {
        console.log('Failed to notify drivers:',error.message);
    }


    res.status(201).send({
        data:{booking,
            success:true,
            error:null,
            message:"success"
        }
    })
    
} catch (error) {
 console.log('error in controller',error.message);       
}
}