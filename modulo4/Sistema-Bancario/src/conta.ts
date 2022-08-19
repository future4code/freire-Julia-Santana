export type dados = {
    name: string,
    cpf: number,
    dataNasc: any,
    saldo: number
    age:number
  
};




export let usuarios: dados[] = [
    {
        name: "julia",
        cpf: 12345678970,
        dataNasc: 10 / 08 / 90,
        saldo: 1000,
        age:20
       // extrato: "compra realizada dia 15/08/2022, na loja Marisa no valor de R$ 350,00",
        
    },

    {
        name: "paulo",
        cpf: 12345678980,
        dataNasc: 29 / 09 / 91,
        saldo: 1500,
        age:24
       // extrato: "compra realizada dia 10/08/2022, na loja Renner no valor de R$ 400,00",
    },

    {
        name: "Heitor",
        cpf: 12345678990,
        dataNasc: 20 / 10 / 92,
        saldo: 2000,
        age:23
       // extrato: "compra realizada dia 10/07/2022, na loja Casas Bahia, no valor de R$ 800,00",
    }


]