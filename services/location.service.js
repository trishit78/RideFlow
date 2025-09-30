import redisClient from "../utils/redis.js";

class LocationService{
    async addDriverLocation(locationData){
        try{
            await redisClient.sendCommand([
                'GEOADD',
                'drivers',
                locationData.longitude.toString(),
                locationData.latitude.toString(),
                locationData.passengerId.toString(),
            ])
        }catch{
            console.error('Cannot add to redis')
        }
    }
}

export default new LocationService();