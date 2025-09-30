import { Booking } from "../models/bookingSchema.js";




export async function createBooking(bookingData) {
    try {
        
    
    const bookings  = await  Booking.create(bookingData);
    //await bookings.save();
    return bookings;
} catch (error) {
 console.log('error in booking repo',error);       
}    
}
