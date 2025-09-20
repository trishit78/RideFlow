import { createBookingDTO } from "../dtos/booking.dto";
import { Booking } from "../models/bookings.model";

export async function createBooking(bookingData:createBookingDTO) {
    const bookings  = new Booking(bookingData);
    await bookings.save();
    return bookings    
}