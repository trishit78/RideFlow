import express from 'express';
import { updateLocationHandler } from '../controllers/driver.controller.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';


const driverRouter = express.Router();

driverRouter.post('/location',authMiddleware, updateLocationHandler);

export default driverRouter;
