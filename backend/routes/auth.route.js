import express from 'express';
import { login, register } from '../controllers/auth.controller.js';



const v1Router = express.Router();

v1Router.post('/register',register);
v1Router.post('/login',login);



export default v1Router;