import redisClient from "../utils/redisClient.js";

export const setDriverSocket = async(driverId,socketId)=>{
    try {
        await redisClient.hSet('driverSockets',driverId,socketId);
    } catch (error) {
        throw error;
    }
 }
 
export const getDriverSocket = async(driverId)=>{
  try {
    return await redisClient.hGet('driverSockets',driverId);
  } catch (error) {
    throw error;
  }  
 }