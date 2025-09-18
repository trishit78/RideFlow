import redis from 'redis'
import logger from "./logger.config";


export const redisClient = redis.createClient();

redisClient.on("connect",()=>{
    logger.info("Connected to redis successfully");
})
redisClient.on("error",(error)=>{
    logger.error("Redis connection error",error);
})


redisClient.connect();