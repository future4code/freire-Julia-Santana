import express from "express";


const app = express();

app.use(express.json());



app.listen(3003, ()=>{
    console.log("server rodando na porta 3003");
    
})


type user = {
	name: string,
    id:number,
    phone:number,
    email:string,
    website:string,
    pessoa:string
}


const users = [
    {
      name: "lucas",
      id: "05",
      phone:123456,
      email:"lucas@gmail.com",
      website:"www.lucastech.com.br"

    },

    {
        name: "Julia",
        id: "06",
        phone:1234567,
        email:"julia@gmail.com",
        website:"www.juliatech.com.br"
  
      },

      {
        name: "joao",
        id: "07",
        phone:1234568,
        email:"joao@gmail.com",
        website:"www.joaotech.com.br"
  
      },
]

app.get("/users", (req,res)=>{
    const users: object[] = pessoa.map (pessoas=>{
        return pessoas.users

    })
    console.log(users.flat(1));
    
});


type post = {
    id:number,
    title:string,
    body:string,
    userId:number
}

const postagens = [{
    id:"05",
    title:"musicas",
    body:"pop",
    userId:"10"
},

{
    id:"10",
    title:"musicas",
    body:"sertanejo",
    userId:"15"
}

// Achei melhor criar fora do array de usuarios, pra ficar mais organizado.

]

app.get ("/post", (req, res)=>{
    const post:object[] = postagens.map(lista =>{
        return lista.id
    })

    console.log(postagens.flat(1));
    
})

// import { AddressInfo } from "net";

// const app = express();

// app.use(express.json());

// const server = app.listen(process.env.PORT || 3003, () => {
//   if (server) {
//     const address = server.address() as AddressInfo;
//     console.log(`Server is running in http://localhost:${address.port}`);
//   } else {
//     console.error(`Failure upon starting server.`);
//   }
// });;
 