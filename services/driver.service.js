
import { updateDriverLocation } from "../repositories/auth.repository.js";
import locationService from "./location.service.js";


export async function updateLocationService(updateLocationData) {
    const {passengerId,long,lat} = updateLocationData;


    const latitude =parseFloat(lat);
    const longitude = parseFloat(long);

    const res = await locationService.addDriverLocation({passengerId,latitude,longitude});

    await updateDriverLocation(passengerId,{
        type:'Point',
        coordinates:[long,lat]
    })


    console.log(latitude,longitude,passengerId,res);

}

