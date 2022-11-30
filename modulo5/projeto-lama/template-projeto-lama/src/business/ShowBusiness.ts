import { ShowDatabase } from "../database/ShowDatabase"
import { ICreateReserva, ICreateShowInputDTO, ICreateShowOutputDTO, IGetShowInputDTO, IGetShowOutputDTO, Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createShow = async ( input:ICreateShowInputDTO)=>{
        const {token, band, startsAt, tickets} = input

        const payload = this.authenticator.getTokenPayload(token)
  
          if(band.length < 1 ){
            throw new Error("Só é permitido um show por dia ");
          }
       const id = this.idGenerator.generate()
    
         const show = new Show(id, band, startsAt, tickets, )
         
    
         await this.showDatabase.createShow(show)

         const response:ICreateShowOutputDTO = {
            message:"Show Criado com Sucesso",
            show
         }
    
         return response
    
    }

    public getShow = async (input:IGetShowInputDTO)=>{
       const {token} = input 
       const payload = this.authenticator.getTokenPayload(token)

       const showsDB = await this.showDatabase.getShow()

       const show = showsDB.map(showDB =>{
          return new Show(
            showDB.id,
            showDB.band,
            showDB.starts_at
          )
       })

       for (let Show of show){
            const showID = Show.getId()
            const band = await this.showDatabase.getShow()
            
       }

       const response: IGetShowOutputDTO = {
        show
    }

    return response

       } 

       public createReserva = async ( input:ICreateReserva)=>{
     
            
         }
    
         //return response
    
    }

    
   