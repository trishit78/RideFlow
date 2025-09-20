import express from 'express';
import pingRouter from './ping.router';
import { login, register } from '../../controllers/auth.controller';


const v1Router = express.Router();

v1Router.post('/register',register);
v1Router.post('/login',login);


v1Router.use('/ping',  pingRouter);

export default v1Router;