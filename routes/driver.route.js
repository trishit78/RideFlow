import express from 'express';
import { confirmBookingHandler, updateLocationHandler } from '../controllers/driver.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';


const driverRouter = express.Router();

driverRouter.post('/location',authMiddleware, updateLocationHandler);
driverRouter.post('/confirm',authMiddleware,confirmBookingHandler);

export default driverRouter;
