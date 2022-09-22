import { IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    
    public static TABLE_LIKES = "Labook_Likes"

    public static TABLE_POSTS = "Labook_Posts"
    public createPost = async(post: Post)=>{
        const IPostDB = {
          
        }
        await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
        .insert(IPostDB)
    }

    public findByPost = async(content:string):Promise<IPostDB>=>{
        const result:IPostDB[] = await BaseDatabase.connection(PostDatabase.TABLE_POSTS).select()
        .where({content})
        return result[0]
 }

}