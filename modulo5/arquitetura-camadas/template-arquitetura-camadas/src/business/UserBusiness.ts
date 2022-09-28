import { sensitiveHeaders } from "http2";
import UserData from "../database/UserDatabase";
import { MissingFields } from "../error/MissingFields";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import   User, { UserBD, userDTO, USER_ROLES } "../models/User";

export class UserBusiness {
    async create(userDTO: userDTO:Promise<string> {

        const { nome, email, senha, role } = userDTO

        if (!nome || !email || !senha || !role) {
            throw new MissingFields()
        }

        if (senha.length < 6) {
            throw new Error("A senha deve conter no minimo 6 caracteres")
        }

        if (role.toUpperCase() !== USER_ROLES.NORMAL && role.toUpperCase() !== USER_ROLES.ADMIN) {
            throw new Error("Usuario só pode ser do tipo normal ou admin")
        }

        const userData = new UserData()

        const emailAlreadyExit = await userData.getUserByEmail(email)

        if (emailAlreadyExit) {
            throw new Error("Email ja cadastrado")
        }
        
    }
    