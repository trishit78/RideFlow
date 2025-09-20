

export interface LocationDTO {
  latitude: number;
  longitude: number;
}

export type BookingDataDTO ={
    passengerId:string,
    source:LocationDTO,
    destination:LocationDTO
}

// passenger:bookingData.passengerId,
//         source:bookingData.source,
//         destination:bookingData.destination,
//         fare,
//         status:'pending'


export type createBookingDTO={
    passenger:string,
   source:LocationDTO,
    destination:LocationDTO,
    fare:number,
    status:string,
    distance:number
}