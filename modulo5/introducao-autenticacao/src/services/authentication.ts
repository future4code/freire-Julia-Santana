import * as jwt from 'jsonwebtoken'

export class authentication{
    public generateToken (payload:any){
        const token = jwt.sign({payload},
            "bananinha",

            {expiresIn:"4h"}

            )
            return token
    }

    public getTokenData(){
        const = tokenData = jwt.verify(token,"bananinha")
        return tokenData
        
    }
   
   
}    