import { PostBusiness } from "../business/PostBusiness";
import { IPostDB } from "../models/Post";
import { Request, Response } from "express";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}
//criar request rest, na funcao create post 
public post = async (req: Request, res: Response) =>{

try {
    const input: IPostDB = {
        id:req.body.id,
        content: req.body.content,
        user_id: req.body.user_id
    }

   
    const response = await this.postBusiness.post(input)

    res.status(201).send(response)
} catch (error:any) {
    res.status(422).send({ message: error.message })
}
}
}

