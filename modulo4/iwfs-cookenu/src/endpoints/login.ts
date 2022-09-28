import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User, USER_ROLES } from "../entities/User";
import { AuthenticationData, Authenticator } from "../services/Authentication";
import { hashManager } from "../services/hashManager";
import { idGenerator } from "../services/idGenerator";


export async function login(req:Request, res:Response){
        try {
            const {password, email} = req.body
            if( !email || !password ){
                res.status(422).send ("insira corretamente as informações ', 'email', 'password',  ")
            }
            if(password <  6){
                 res.status(422).send(" O password aceita no mínimo 6 digitos")
            }

            // verificando se o usuario já existe
             const userDB = await new UserDataBase().findByEmail(email)
             if(!userDB){
                res.status(409).send("esse email não está cadastrado")
             }

              //instacia da classe
             const user = new User(
                userDB?.id,
                userDB?.name,
                userDB?.email,
                userDB?.password,
                userDB?.role
             )
            
            const HashManager = new hashManager()
            const passwordIsCorrect = HashManager.compare(password, userDB.password)

            if(!passwordIsCorrect){
                res.status(401).send('email ou senha incorereto')
            }

            const payload:AuthenticationData = {
                 id:user.getId(),
                 role:user.getRole()

            }
            const token = new Authenticator().generateToken(payload)
            
             res.status(200).send({ message: "Usuário logado com sucesso", token})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
       
}