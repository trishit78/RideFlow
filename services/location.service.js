import redisClient from "../utils/redis.js";

class LocationService{
    async addDriverLocation(driverId,latitude,longitude) {

        try {
            await redisClient.sendCommand([
                'GEOADD',
                'drivers',
                longitude.toString(),
                latitude.toString(),
                driverId.toString(),
            ]);
            
        }catch(error){
            console.log("Cannot add to redis", error);
        }
    }
    async findNearByDrivers(latitude,longitude,radiusKm){
        

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

    // async setDriverSocket(driverId,socketId){
    //     await redisClient.set(`driver:${driverId}`,socketId);
    // }
    // async getDriverSocket(driverId){
    //     return await redisClient.get(`driver:${driverId}`);
    // }
    // async deleteDriverSocket(driverId){
    //     await redisClient.del(`driver:${driverId}`);
    // }

    // async deleteBySocket(socketId){
    //     deleteDriverSocket(redisClient.get(socketId));
    // }

    async storedNotifiedDrivers(bookingId,driverIds){
        for (const driverId of driverIds){
            const addedCount = await redisClient.sAdd(`notifiedDrivers:${bookingId}`,driverId);
            console.log(`Added driver ${driverId} to the set for booking ${bookingId}. result: ${addedCount}` );
        }
    }
}

export default new LocationService();