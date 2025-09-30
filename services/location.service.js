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

    async findNearByDrivers(longitude,latitude,radiusKm){
        const nearByDrivers = await redisClient.sendCommand([
            'GEORADIUS',
            'drivers',
            longitude.toString(),
            latitude.toString(),
            radiusKm.toString(),
            'km',
            'WITHCOORD'
        ])       
        return nearByDrivers
    }

    async setDriverSocket(driverId,socketId){
        await redisClient.set(`driver:${driverId}`,socketId);
    }
    async getDriverSocket(driverId){
        return await redisClient.get(`driver:${driverId}`);
    }
    async deleteDriverSocket(driverId){
        await redisClient.del(`driver:${driverId}`);
    }
}

export default new LocationService();