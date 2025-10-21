
import { updateDriverLocation } from "../repositories/auth.repository.js";
import { updateBookingStatus } from "../repositories/booking.repository.js";
import locationService from "./location.service.js";


export async function updateLocationService(updateLocationData) {
    const {passengerId,long,lat} = updateLocationData;


    const latitude =parseFloat(lat);
    const longitude = parseFloat(long);
    try{

        const res = await locationService.addDriverLocation(passengerId,latitude,longitude);
        
        await updateDriverLocation(passengerId,{
            type:'Point',
            coordinates:[long,lat]
        })
        
    }catch(error){
        console.log('error ',error.message)
    }

    //console.log(latitude,longitude,passengerId,res);

}
export async function assignDriverService(bookingId, driverId) {
    console.log("Assigning driver:", bookingId, driverId);
    
    const booking = await updateBookingStatus(bookingId, driverId, 'confirmed'); 
    
    if (!booking) {
      throw new Error('Booking already confirmed or does not exist');
    }
    return booking;
  }
  

