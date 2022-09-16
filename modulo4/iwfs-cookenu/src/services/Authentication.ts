import * as jwt from 'jsonwebtoken'
import { USER_ROLES } from '../entities/User'
import dotenv from "dotenv"

dotenv.config()

export interface AuthenticationData{
    id:string,
    role:USER_ROLES
}
export class Authenticator{
    // generate(arg: { id: string; role: any }) {
    //     throw new Error("Method not implemented.")
    // }
  
    //gerar token
    public generateToken =  (payload:AuthenticationData):string=>{
      const token = jwt.sign(payload,
          process.env.JWT_KEY as string,
          {expiresIn: process.env.EXPIRES_IN}
          )
          return token 
  }
// recebe o tokem 
  public getTokenData= (token:string):AuthenticationData | null=>{
     try {
         const payload = jwt.verify(token, process.env.JWT_KEY as string)
         return payload as AuthenticationData 
         
     } catch (error:any) {
        return null 
     }
}
}