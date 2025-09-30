import express from 'express';

import { createBookingHandler } from '../controllers/booking.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const passengerRouter = express.Router();


passengerRouter.post('/ride',authMiddleware, createBookingHandler);

export default passengerRouter;