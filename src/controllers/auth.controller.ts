import { Request, Response } from "express";
import { loginService, registerService } from "../services/auth.service";

export async function register(req:Request,res:Response) {
    const {user,token} = await registerService(req.body);
    res.status(201).json({
        data:{user,token},
        success:true,
        error:null,
        message:"Successfully registered"
    })
}

export async function login(req:Request,res:Response) {
   const {email,password} = req.body;
    const {user,token} = await loginService({email,password});
    res.status(201).json({
        data:{user,token},
        success: true,
        error:null,
        message:"Successfully logged in"
    })
}