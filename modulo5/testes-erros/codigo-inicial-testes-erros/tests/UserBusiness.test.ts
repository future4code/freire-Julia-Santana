import { UserBusiness } from "../src/business/UserBusiness"
import { BaseError } from "../src/errors/BaseError"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )
    
    test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
        const input: ISignupInputDTO = {
            email: "fulano@gmail.com",
            name: "Fulano",
            password: "fulano123"
        }

        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })

    test("Um token é retornado quando o login é bem-sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })


    // testando os erros 

    test("Retorna erro caso o name seja uma string vazia",
        async ()=>{
            expect.assertions(2)
            try{
                const input: ISignupInputDTO = {
                    email: "astrodev@gmail.com",
                    name: "",
                    password: "bananinha"
                }

                await userBusiness.signup(input)

            }catch(error:unknown){ 

                if (error instanceof BaseError){
                    expect(error.statusCode).toEqual(400)
                    expect(error.message)
                    .toEqual("Parâmetro 'name' inválido: mínimo de 3 caracteres")
                }

            }

        })


        test("Retorna erro caso o email seja uma string vazia",
        async ()=>{
            expect.assertions(2)
            try{
                const input: ISignupInputDTO = {
                    email: "",
                    name: "Astrodev",
                    password: "bananinha"
                }

                await userBusiness.signup(input)

            }catch(error:unknown){ 

                if (error instanceof BaseError){
                    expect(error.statusCode).toEqual(400)
                    expect(error.message)
                    .toEqual("Parâmetro 'email' inválido")
                }

            }

        })

        test("Retorna erro caso a senha seja uma string vazia",
        async ()=>{
            expect.assertions(2)
            try{
                const input: ISignupInputDTO = {
                    email: "astrodev@gmail.com",
                    name: "Astrodev",
                    password: ""
                }

                await userBusiness.signup(input)

            }catch(error:unknown){ 

                if (error instanceof BaseError){
                    expect(error.statusCode).toEqual(400)
                    expect(error.message)
                    .toEqual("Parâmetro 'password' inválido: mínimo de 6 caracteres")
                }

            }

        })

  test("Retornar erro caso o 'name', for menor que 3 caractere", async()=>{
      expect.assertions(2)

      try {
        const input: ISignupInputDTO ={
                    email: "astrodev@gmail.com",
                    name: "As",
                    password: "bananinha"
        }

        await userBusiness.signup(input)
      } catch (error:unknown) {

        if (error instanceof BaseError){
            expect(error.statusCode).toEqual(400)
            expect(error.message)
            .toEqual("Parâmetro 'name' inválido: mínimo de 3 caracteres")
        }
        
      }
  })


  test("Retornar erro caso o 'password', for menor que 6 caractere", async()=>{
    expect.assertions(2)

    try {
      const input: ISignupInputDTO ={
                  email: "astrodev@gmail.com",
                  name: "Astrodev",
                  password: "ban"
      }

      await userBusiness.signup(input)
    } catch (error:unknown) {

      if (error instanceof BaseError){
          expect(error.statusCode).toEqual(400)
          expect(error.message)
          .toEqual("Parâmetro 'password' inválido: mínimo de 6 caracteres")
      }
      
    }
})



test("Retornar erro caso o 'email',  não tiver o @ ", async()=>{
    expect.assertions(2)

    try {
      const input: ISignupInputDTO ={
                  email: "astrodevgmail.com",
                  name: "Astrodev",
                  password: "bananinha"
      }

      await userBusiness.signup(input)
    } catch (error:unknown) {

      if (error instanceof BaseError){
          expect(error.statusCode).toEqual(400)
          expect(error.message)
          .toEqual("Parâmetro 'email' inválido")
      }
      
    }
})



// testando erro login 

test("Retorna erro caso o email seja uma string vazia",
        async ()=>{
            expect.assertions(2)
            try{
                const input: ILoginInputDTO = {
                     email: "",
                     password: "bananinha"
                 }

                await userBusiness.login(input)

            }catch(error:unknown){ 

                if (error instanceof BaseError){
                    expect(error.statusCode).toEqual(400)
                    expect(error.message)
                    .toEqual("Parâmetro 'email' inválido")
                }

            }

        })

        test("Retorna erro caso a senha seja uma string vazia",
        async ()=>{
            expect.assertions(2)
            try{
                const input: ILoginInputDTO = {
                     email: "astrodev@gmail.com",
                     password: ""
                 }

                await userBusiness.login(input)

            }catch(error:unknown){ 

                if (error instanceof BaseError){
                    expect(error.statusCode).toEqual(400)
                    expect(error.message)
                    .toEqual("Parâmetro 'password' inválido: mínimo de 6 caracteres")
                }

            }

        })

        test("Retornar erro caso o 'password', for menor que 6 caractere", async()=>{
            expect.assertions(2)
        
            try {
                const input: ILoginInputDTO = {
                    email: "astrodev@gmail.com",
                    password: "bana"
                }

        
              await userBusiness.login(input)
            } catch (error:unknown) {
        
              if (error instanceof BaseError){
                  expect(error.statusCode).toEqual(400)
                  expect(error.message)
                  .toEqual("Parâmetro 'password' inválido: mínimo de 6 caracteres")
              }
              
            }
        })
        
        
        
        test("Retornar erro caso o 'email',  não tiver o @ ", async()=>{
            expect.assertions(2)
        
            try {
              const input: ISignupInputDTO ={
                          email: "astrodevgmail.com",
                          name: "Astrodev",
                          password: "bananinha"
              }
        
              await userBusiness.signup(input)
            } catch (error:unknown) {
        
              if (error instanceof BaseError){
                  expect(error.statusCode).toEqual(400)
                  expect(error.message)
                  .toEqual("Parâmetro 'email' inválido")
              }
              
            }
        })

})