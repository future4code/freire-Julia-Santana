import test, { describe } from "node:test"
import { ProductBusiness } from "../../business/ProductBusiness"
import { products } from "../../dataBase/migration/Data"
import { BaseError } from "../../errors/BaseError"
import { IGetProductArrayOutputDTO, IGetProductDTO, IGetProductOutputDTO } from "../../models/Products"
import { productRouter } from "../../Router/ProductRouter"
import { IdGeneratorMock } from "./IdGeneratorMock"
import { ProductDatabaseMock } from "./ProductDataBaseMock"

describe("Testando a ProdutBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock(),
        new IdGeneratorMock()
    )

   
   
    test("Deve retornar uma lista de produtos", async () => {
        const input: IGetProductArrayOutputDTO= {
            product:[]
        }

        const response = await productBusiness.selectAllProducts(product)
        expect(response)
        expect(response.posts[0]).toBeInstanceOf(Post)
    })

  
    // testando erros


    test("Retornar erro caso o 'Product', for uma string vazia ", async()=>{
    
        try {
          const input: IGetProductDTO  ={
            name: "name-mock-normal",
            tags: "tags-mock-normal"
          }
    
          await productBusiness.selectAllProducts(input)
        } catch (error:unknown) {
    
          if (error instanceof BaseError){
              expect(error.statusCode).toEqual(401)
              expect(error.message)
              .toEqual("Parâmetro 'content' inválido: mínimo de 1 caracteres")
          }
          
        }
    })

    test("Retornar erro caso o 'product', for menor que 1 caracter", async()=>{
       
     try {
          const input: IGetProductDTO ={
            name: "name-mock-normal",
            tags: "tags-mock-normal"
          }
    
          await productBusiness.selectAllProducts(input)
        } catch (error:unknown) {
    
          if (error instanceof BaseError){
              expect(error.statusCode).toEqual(400)
              expect(error.message)
              .toEqual("Parâmetro 'content' inválido: mínimo de 1 caracteres")
          }
          
        }
    })


})

function expect(length: any) {
    throw new Error("Function not implemented.")
}
    