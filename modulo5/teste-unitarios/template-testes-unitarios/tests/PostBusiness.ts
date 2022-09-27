import { response } from "express"
import { PostBusiness } from "../src/business/PostBusiness"
import { IAddLikeInputDTO, ICreatePostInputDTO, IDeletePostInputDTO, IDeletePostOutputDTO, IGetPostsInputDTO, Post } from "../src/models/Post"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDataBaseMock"

describe("Testando a PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Deve retornar uma lista de posts", async () => {
        const input: IGetPostsInputDTO = {
            token: "token-mock-normal"
        }

        const response = await postBusiness.getPosts(input)
        expect(response.posts.length).toBe(3)
        expect(response.posts[0]).toBeInstanceOf(Post)
    })

    test("Deve ser possível criar um novo post", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: "Teste do mock"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toBe("Post criado com sucesso")
        expect(response).toBeInstanceOf(Post)
        expect(response.post.getId()).toBe("id-mock")
        expect(response.post.getContent()).toBe("Teste do mock")
        expect(response.post.getLikes()).toBe(0)
        expect(response.post.getUserId()).toBe("id-mock")
    })

    test(" Deve ser possivel Apagar um Post", async()=>{
        const input: IDeletePostInputDTO = {
            token: "token-mock-admin",
            postId:"id-mock"
            
        }
        const response = await postBusiness.deletePost(input)
     expect(response.message).toBe("Poste Deletado com sucesso")
    })

    test(" Deve ser possivel ver a curtida", async()=>{
        const input:IAddLikeInputDTO ={
            token: "token-mock-admin",
            postId:"id-mock"
        }

        const response = await postBusiness.addLike(input)
        expect(response.message).toBe("Curtida visualizada")
    })

    test(" Dever ser Possivel remover o like", async()=>{
           const input:  IDeletePostInputDTO ={
            token: "token-mock-admin",
            postId:"id-mock"
           }


        const response = await postBusiness.removeLike(input)
        expect(response.message).toBe("Curtida Removida")
    })
})