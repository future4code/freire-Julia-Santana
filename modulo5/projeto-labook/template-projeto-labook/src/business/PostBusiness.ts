import { PostDatabase } from "../database/PostDatabase"
import { IPostDB, Post } from "../models/Post"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}
// criar authenticação do post 

public post = async (input:IPostDB) => {
    const {content,user_id}= input

    if ( !content || !user_id) {
        throw new Error("Um ou mais parâmetros faltando")
    }

     if(content.length < 1 ){
        throw new Error("Content deve ter no mínimo 1 caractere");
     }
     const IPostDB = await this.postDatabase.findByPost(content) 

     const idGenerator = new IdGenerator()
        const id = idGenerator.generate()
       
        const post = new Post(
            id,
            content,
            user_id,
        )

        await this.postDatabase.createPost(post)



}
}