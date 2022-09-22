import { IUserDB } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"
import { User } from "../models/User"
import { userInfo } from "os"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"
    public createUser = async(user: User)=>{
        const userDB = {
          
        }
        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .insert(userDB)
    }

    public findByEmail = async(email:string):Promise<IUserDB>=>{
        const result:IUserDB[] = await BaseDatabase.connection(UserDatabase.TABLE_USERS).select()
        .where({email})
        return result[0]
 }


}