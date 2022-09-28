import { IUserDB, User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDataBase extends BaseDatabase {
    public static TABLE_USER = "User"

    public createUser = async(user: User)=>{
        const userDB = {
            id: user.getId(),
           name: user.getName(),
           email: user.getEmail(),
           password:user.getPassword(),
           role: user.getRole()
        }
        await BaseDatabase.connection(UserDataBase.TABLE_USER)
        .insert(userDB)
    }

    public findByEmail = async(email:string):Promise<IUserDB>=>{
           const result:IUserDB[] = await BaseDatabase.connection(UserDataBase.TABLE_USER).select()
           .where({email})
           return result[0]
    }

    // static getUserById(id: string) {
    //     throw new Error("Method not implemented.");
    // }

    // public async createUser(user: User): Promise<void> {
    //     try {
    //         await BaseDatabase.connection("User").insert({
    //             id: user.getId,
    //             name: user.getName,
    //             email: user.getEmail,
    //             password:user.getPassword,
    //             role: user.getRole
    //         })

    //     } catch (error: any) {
    //         throw new Error(error.sqlMessage || error.mesage);
    //     }
    // }

    // encontrar um usuario por email


    // public async findUserBtEmail(email: string): Promise<User> {
    //     try {
    //         const user = await BaseDatabase.connection("User")
    //             .select('*')
    //             .where({ email: email });

    //         return user[0] && User.toUserModel(user[0]);

    //     } catch (error: any) {
    //         throw new Error(error.sqlMessage || error.mesage);

    //     }
    // }

     // encontrar um usuario por id
    public async getUserById(id: string): Promise<User> {
        try {
          const user = await BaseDatabase.connection("User")
            .select("*")
            .where({ id: id });
    
          return user[0] && User.toUserModel(user[0]);
        } catch (error: any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
    public async getAllUsers(): Promise<User[]> {
        try {
            const users = await BaseDatabase.connection("User").select(
                "id", 
                "name", 
                "role")
    
                return users.map(user => User.toUserModel(user))
           
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    
        
}
}