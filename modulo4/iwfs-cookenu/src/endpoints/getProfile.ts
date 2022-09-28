import { Request, Response } from "express";
import { Authenticator } from "../services/Authentication";
import { UserDataBase } from "../data/UserDataBase";


//3 Informações do próprio perfil

export async function getProfile (req:Request, res:Response){
    try {
         const token = req.headers.authorization as string;
         const authenticator = new Authenticator();
         const authenticatorData = authenticator.getTokenData(token);

         const userData = new UserDataBase();
         const user = await userData.getUserById(authenticatorData.id);

         res.status(200).send({
            name:user.getName,
            email:user.getEmail
         });

    } catch (error:any) {
    res.status(400).send(error.message);
    }
}
