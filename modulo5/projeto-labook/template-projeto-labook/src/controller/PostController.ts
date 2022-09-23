import { PostBusiness } from "../business/PostBusiness";
import { IAddLikeInputDTO, ICreatePostInputDTO, IDeletePostInputDTO, IGetPostsInputDTO, IRemoveLikeInputDTO} from "../models/Post";
import { Request, Response } from "express";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}
//criar request rest, na funcao create post 
public createPost = async (req: Request, res: Response) =>{

try {
    const input: ICreatePostInputDTO = {
        token:req.headers.authorization as string,
        content: req.body.content
    }

   
    const response = await this.postBusiness.createPost(input)


    res.status(201).send(response)
} catch (error:any) {
    res.status(422).send({ message: error.message })
}
}

public getPosts = async (req: Request, res: Response) => {
    try {
        const input: IGetPostsInputDTO = {
            token: req.headers.authorization as string
        }

        const response = await this.postBusiness.getPosts(input)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

public deletePost = async (req: Request, res: Response) => {
    try {
        const input: IDeletePostInputDTO = {
            token: req.headers.authorization as string,
            postId: req.params.id
        }

        const response = await this.postBusiness.deletePost(input)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

public addLike = async (req: Request, res: Response) => {
    try {
        const input: IAddLikeInputDTO = {
            token: req.headers.authorization as string,
            postId: req.params.id
        }

        const response = await this.postBusiness.addLike(input)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

public removeLike = async (req: Request, res: Response) => {
    try {
        const input: IRemoveLikeInputDTO = {
            token: req.headers.authorization as string,
            postId: req.params.id
        }

        const response = await this.postBusiness.removeLike(input)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}
}

