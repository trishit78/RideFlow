import { createBooking } from "../repositories/booking.repository.js";
import { haversineDistance } from "../utils/distance.js";
import locationService from "./location.service.js";

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
      distance: distance,
    };

    const booking = await createBooking(bookingDataObj);
    return booking;
  } catch (error) {
    console.log("error in service booking", error);
  }
}

export async function findNearByDrivers(location, radius = 5) {
  const longitude = parseFloat(location.longitude);
  const latitude = parseFloat(location.latitude);

  const radiusKm = parseFloat(radius);
  const nearByDrivers = await locationService.findNearByDrivers(
    longitude,
    latitude,
    radiusKm
  );

  

  return nearByDrivers;
}
