import { UserDatabase } from "../database/UserDatabase"
import { ILoginInputDTO, ISignupInputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}


    public signup = async (input: ISignupInputDTO ) =>{
        const {name, email, password} = input

        if(!name || !email || !password){
            throw new Error("Um ou mais parâmetro faltando");
        }

        if(typeof name !== "string" || name.length < 3){
          throw new Error("Parâmetro 'name' inválido: mínimo de 3 caracteres");
          
        }

        if(typeof password !== "string" || password.length < 6){
            throw new Error("Parâmetro 'password' inválido: mínimo de 6 caracteres");
            
          }

          if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }


        const userDB = await this.userDatabase.findByEmail(email)

        if(userDB){
            throw new Error("Email já cadastrado");
        }

        const hashManager = new HashManager()

        const id =  this.idGenerator.generate()
        const hashedPassword = await hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword,
            USER_ROLES.NORMAL
        )

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload ={
            id:user.getId(),
            role:user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "cadastro realizado com sucesso",
            token
        }

        return response 

    }

    public login = async (input:ILoginInputDTO)=>{
        const {email, password} = input

        if(!email || !password){
            throw new Error("Um ou mas parâmetros faltando");
        }

        if(typeof password !== "string" || password.length < 6){
            throw new Error("Parâmetro 'password' inválido: mínimo de 6 caracteres");
            
          }

          if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if(!userDB){
            throw new Error("E-mail não cadastrado");
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())

        if(!isPasswordCorrect){
            throw new Error("Senha incorreta"); 
        }

        const payload:ITokenPayload ={
            id:user.getId(),
            role:user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response ={
            message:"Login Realizado com sucesso",
            token
        }

        return response 
    }
}