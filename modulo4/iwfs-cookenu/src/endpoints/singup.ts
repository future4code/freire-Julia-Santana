import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User, USER_ROLES } from "../entities/User";
import { Authenticator } from "../services/Authentication";
import { hashManager } from "../services/hashManager";
import { idGenerator } from "../services/idGenerator";

export async function singup(req:Request, res:Response){
        try {
            const {name, email, password, role} = req.body
            if(!name || !email || !password || !role){
                res.status(422).send ("insira corretamente as informações 'name', 'email', 'password', 'role' ")
            }
            if(password <  6){
                 res.status(422).send(" O password aceita no mínimo 6 digitos")
            }
            
             if(role.toUpperCase() !== USER_ROLES.ADMIN &&  role.toUpperCase() !== USER_ROLES.NORMAL){
                        res.status(422).send(" Não pode ser diferente de NORMAL OU ADMIN ")
             }

            // verificando se o usuario já existe
             const userData = new UserDataBase()
             const user = await userData. findUserBtEmail(email)
             if(!user){
                res.status(409).send("esse email já está cadastrado")
             }
            //instacia da classe
            const Idgenerator = new idGenerator();
            const id = Idgenerator.generate() // cria o id

            const HashManager = new hashManager()
            const hashPassword =  await HashManager.hash(password)

            const user1 = new User(id, name, email, hashPassword, role)
             await userData.createUser(user1);

             const authentication = new Authenticator()
             const token = authentication.generate({id, role});
             res.status(200).send({ message: "Usuário criado com sucesso", token})
        } catch (error:any) {
            res.status(400).send(error.message);
        }
       
}