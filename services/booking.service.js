
import { createBooking } from "../repositories/booking.repository.js";
import { haversineDistance } from "../utils/distance.js";


const BASIC_FARE = 50;
const RATE_PER_KM = 12;

export async function createBookingService(bookingData) {
  try {
    
  const distance = haversineDistance(
    bookingData.source.latitude,
    bookingData.source.longitude,
    bookingData.destination.latitude,
    bookingData.destination.longitude
  );

  const fare = BASIC_FARE + distance * RATE_PER_KM;

  const bookingDataObj = {
    passenger: bookingData.passengerId,
    source: bookingData.source,
    destination: bookingData.destination,
    fare,
    status: "pending",
    distance:distance
  };

  const booking = await createBooking(bookingDataObj);
  return booking;
  
} catch (error) {
 console.log('error in service booking',error);   
}
}
