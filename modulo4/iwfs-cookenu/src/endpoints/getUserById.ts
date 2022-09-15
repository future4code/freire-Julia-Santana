import {Request, Response} from "express";
import {Authenticator} from "../services/Authentication";
import {UserDataBase} from "../data/UserDataBase";

export async function getUserById(req:Request, res:Response){
    try {
          const token = req.headers.authorization as string
          const userId = req.params.id ;

          const authentication = new Authenticator();
          const authenticationData = authentication.getTokenData(token)

        const userData = new UserDataBase();
        const user = await userData.getUserById(authenticationData.id);

        res.status(200).send({
            id:user.getId,
            name:user.getName,
            email:user.getEmail

        })
      
    } catch (error:any) {
        res.status(400).send(error.message);
    }
}
