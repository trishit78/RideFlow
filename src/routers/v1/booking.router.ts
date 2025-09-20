import express from 'express';
import { createBookingHandler } from "../../controllers/booking.controller";
import { authMiddleware } from '../../middlewares/auth.middleware';

const passengerRouter = express.Router();

passengerRouter.post('/ride',authMiddleware, createBookingHandler  as any);

export default passengerRouter;