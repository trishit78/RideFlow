import express from 'express' 

import http from 'http';
import cors from 'cors';
import authRoutes from './routes/auth.route.js'
import { connectDB } from './utils/db.js';
import dotenv from "dotenv";
import passengerRouter from './routes/booking.routes.js';
import driverRouter from './routes/driver.route.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const port= process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/passenger',passengerRouter);
app.use('/api/driver',driverRouter);


app.use((req,res)=> res.status(404).json({error:"Not Found"}));

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(401).json({
        error:err.message
    });
});

async function start() {
    await connectDB();
    server.listen(port,()=>{
        console.log(`server running at port: ${port}`)
    })
};

start();