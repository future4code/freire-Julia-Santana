import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User, USER_ROLES } from "../entities/User";
import { AuthenticationData, Authenticator } from "../services/Authentication";
import { hashManager } from "../services/hashManager";
import { idGenerator } from "../services/idGenerator";

export async function signup(req:Request, res:Response){

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
             const user = await userData.findByEmail(email)
             if(user){
                res.status(409).send("esse email já está cadastrado")
             }

            //instacia da classe
            const Idgenerator = new idGenerator();
            const id = Idgenerator.generate() // cria o id

            const HashManager = new hashManager()
            const hashPassword =  await HashManager.hash(password)

            const newUser = new User(id, name, email, hashPassword, role)
             await userData.createUser(newUser);

             const payload:AuthenticationData = {
                  id:newUser.getId(),
                  role:newUser.getRole()
             }
             const token = new Authenticator().generateToken(payload)

             res.status(200).send({ message: "user created successfully", token})
        } catch (error:any) {
            if(typeof error.message === "string" && error.message.includes("Duplicate entry")){
                return res.status(400).send("email already taken")
            }
            res.status(400).send(error.message);
        }
       
}