import * as jwt from 'jsonwebtoken'
import { USER_ROLES } from '../entities/User'

export interface AuthenticationData{
    id:string,
    role:USER_ROLES
}
export class Authenticator{
    generate(arg0: { id: string; role: any }) {
        throw new Error("Method not implemented.")
    }
  
    //gerar token
    public generateToken =  (payload:AuthenticationData)=>{
      const token = jwt.sign(payload,
          process.env.JWT_KEY as string,
          {expiresIn: process.env.EXPIRES_IN}
          )
          return token 
  }
// recebe o tokem 
  public getTokenData= (token:string):AuthenticationData =>{
          const tokenData = 
          jwt.verify(
              token,
              process.env.JWT_KEY as string) as AuthenticationData
          return tokenData 
             }
}