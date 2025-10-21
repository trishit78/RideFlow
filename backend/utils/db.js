import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// console.log('mongo',process.env.MONGO_URI)
export async function connectDB() {
    try{
        
        await mongoose.connect(process.env.MONGO_URI);


        mongoose.connection.on("error",(err)=>{
            console.error("MongoDB connection error",err);
        });

        mongoose.connection.on("disconnected",(err)=>{
            console.error("MongoDB disconnected");
        });

        process.on("SIGINT",async ()=>{
            await mongoose.connection.close();
            console.info("mongoDB connection closed");
            process.exit(0);  // 0 -> success signal
        })

        console.log("monogdb connected");
    }catch(error){
        console.log(error)
        process.exit(1)   // 1 -> error dignal
    }
}