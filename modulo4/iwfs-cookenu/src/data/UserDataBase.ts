import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";



export class UserDataBase extends BaseDatabase {
    static getUserById(id: string) {
        throw new Error("Method not implemented.");
    }
    public async createUser(user: User): Promise<void> {
        try {
            await BaseDatabase.connection("lbn_user").insert({
                id: user.getId,
                name: user.getName,
                email: user.getEmail,
                role: user.getRole
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.mesage);
        }
    }

    // encontrar um usuario por email
    public async findUserBtEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection("lbn_user")
                .select('*')
                .where({ email: email });

            return user[0] && User.toUserModel(user[0]);

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.mesage);

        }
    }

     // encontrar um usuario por id
    public async getUserById(id: string): Promise<User> {
        try {
          const user = await BaseDatabase.connection("users_cookenu")
            .select("*")
            .where({ id: id });
    
          return user[0] && User.toUserModel(user[0]);
        } catch (error: any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
    public async getAllUsers(): Promise<User[]> {
        try {
            const users = await BaseDatabase.connection("lbn_user").select(
                "id", 
                "name", 
                "role")
    
                return users.map(user => User.toUserModel(user))
           
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    
        
}
}