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

export async function updateBookingStatus(bookingId, driverId, status) {
    return Booking.findOneAndUpdate(
      { _id: bookingId, status:'pending' },
      { driver: driverId, status: 'confirmed' },
      { new: true }
    );
  }