import axios from "axios";
import { assignDriverService, updateLocationService } from "../services/driver.service.js";
import locationService from "../services/location.service.js";



export async function updateLocationHandler(req,res) {
    const {lat,long} = req.body;
    
    if(typeof lat !== 'number' || typeof long !== 'number'){
        throw new Error('Lat and long should be in number');
    }
if (!req.user?._id) {
  return res.status(401).json({ success: false, message: "Unauthorized" });
}
updateLocationService({passengerId: req.user?._id.toString(), long, lat});


    res.status(201).json({
        success:true,
        error:null,
        message:'Successfully fetched drivers locations'
    })
}

export async function confirmBookingHandler(req,res) {
    const {bookingId} = req.body;

    const booking = await assignDriverService(bookingId,req.user._id);
    console.log(booking,bookingId);
    const notifiedDriverIds = await locationService.getNotifiedDrivers(bookingId);
    console.log('notified driver ids',notifiedDriverIds);
    try {
        const notificationResponse = await axios.post('http://localhost:3001/api/remove-ride-notification',{
            rideId:bookingId,
            driverIds:bookingId
        })
        console.log('Successfully removed ride notifications',notificationResponse.data);

    } catch (error) {
        console.log('error in driver controllers',error.message);
    }
}


