import express from 'express';
import { notifyDriversHandler, removeRideNotificationHandler } from '../controllers/notification.controller.js';

const router = express.Router();
router.post('/notify-drivers',notifyDriversHandler);
router.post('/remove-ride-notification',removeRideNotificationHandler);

export default router;
