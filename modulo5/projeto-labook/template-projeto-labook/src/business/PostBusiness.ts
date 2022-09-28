import { PostDatabase } from "../database/PostDatabase"
import { IAddLikeInputDTO, IAddLikeOutputDTO, ICreatePostInputDTO, ICreatePostOutputDTO, IDeletePostInputDTO, IDeletePostOutputDTO, IGetPostsInputDTO, IGetPostsOutputDTO, ILikeDB, IRemoveLikeInputDTO, IRemoveLikeOutputDTO, Post } from "../models/Post"
import { USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}


public createPost = async (input:ICreatePostInputDTO) => {

    const {token,content }= input

    const payload = this.authenticator.getTokenPayload(token)
    if(!payload){
        throw new Error("Usuario não autenticado"); 
    }

    if ( !content || typeof content !== "string") {
        throw new Error("Um  parâmetros faltando, ou parãmetro invalido")
    }

     if(content.length < 1 ){
        throw new Error("Content deve ter no mínimo 1 caractere");
     }

     const id = this.idGenerator.generate()

     const post = new Post(id, content, payload.id)

     await this.postDatabase.createPost(post)

     const response:ICreatePostOutputDTO = {
        message:"Post Criado com Sucesso",
        post
     }

     return response

}

public getPosts = async (input: IGetPostsInputDTO) => {
    const { token } = input

    const payload = this.authenticator.getTokenPayload(token)

    if (!payload) {
        throw new Error("Não autenticado")
    }

    const postsDB = await this.postDatabase.getPosts()

    const posts = postsDB.map(postDB => {
        return new Post(
            postDB.id,
            postDB.content,
            postDB.user_id
        )
    })

    for (let post of posts) {
        const postId = post.getId()
        const likes = await this.postDatabase.getLikes(postId)
        post.setLikes(likes)
    }

    const response: IGetPostsOutputDTO = {
        posts
    }

    return response
}

public deletePost = async (input: IDeletePostInputDTO) => {
    const { token, postId } = input

    const payload = this.authenticator.getTokenPayload(token)

    if (!payload) {
        throw new Error("Não autenticado")
    }

    const postDB = await this.postDatabase.findPostById(postId)

    if (!postDB) {
        throw new Error("Post não encontrado")
    }

    if (payload.role === USER_ROLES.NORMAL) {
        if (postDB.user_id !== payload.id) {
            throw new Error("Sem autorização")
        }
    }

    await this.postDatabase.deletePost(postId)

    const response: IDeletePostOutputDTO = {
        message: "Post deletado com sucesso"
    }

    return response
}

public addLike = async (input: IAddLikeInputDTO) => {
    const { token, postId } = input

    const payload = this.authenticator.getTokenPayload(token)

    if (!payload) {
        throw new Error("Não autenticado")
    }

    const postDB = await this.postDatabase.findPostById(postId)

    if (!postDB) {
        throw new Error("Post não encontrado")
    }

    const isAlreadyLiked = await this.postDatabase.findLike(
        postId,
        payload.id
    )

    if (isAlreadyLiked) {
        throw new Error("Já deu like")
    }

    const likeDB: ILikeDB = {
        id: this.idGenerator.generate(),
        post_id: postId,
        user_id: payload.id
    }

    await this.postDatabase.addLike(likeDB)

    const response: IAddLikeOutputDTO = {
        message: "Like realizado com sucesso"
    }

    return response
}
public removeLike = async (input: IRemoveLikeInputDTO) => {
    const { token, postId } = input

    const payload = this.authenticator.getTokenPayload(token)

    if (!payload) {
        throw new Error("Não autenticado")
    }

    const postDB = await this.postDatabase.findPostById(postId)

    if (!postDB) {
        throw new Error("Post não encontrado")
    }

    const isAlreadyLiked = await this.postDatabase.findLike(
        postId,
        payload.id
    )

    if (!isAlreadyLiked) {
        throw new Error("Ainda não deu like")
    }

    await this.postDatabase.removeLike(postId, payload.id)

    const response: IRemoveLikeOutputDTO = {
        message: "Like removido com sucesso"
    }

    return response
}
}