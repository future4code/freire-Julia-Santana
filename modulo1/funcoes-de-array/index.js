// - **Exercícios de interpretação de código**
    
    // Resposta 1 

    // A: { nome: "Amanda Rangel", apelido: "Mandi" },
//        { nome: "Laís Petra", apelido: "Laura" },
//        { nome: "Letícia Chijo", apelido: "Chijo" }

// Resposta 2

   // A: "Amanda Rangel", "Laís Petra", "Letícia Chijo"

// Resposta 3

 //  A:   nome: "Amanda Rangel", apelido: "Mandi" 
 //       nome: "Laís Petra", apelido: "Laura" 

               // Exercícios de escrita de código

                const pets = [
                    { nome: "Lupin", raca: "Salsicha"},
                    { nome: "Polly", raca: "Lhasa Apso"},
                    { nome: "Madame", raca: "Poodle"},
                    { nome: "Quentinho", raca: "Salsicha"},
                    { nome: "Fluffy", raca: "Poodle"},
                    { nome: "Caramelo", raca: "Vira-lata"},
                 ]

  A:   const nomeAnimais = pets.filter(obj => {
       console.log(obj.nome); 
     } )
     console.log(nomeAnimais);
  
     // B: 
     const cachorroSalsicha = pets.filter((pets) => {
         if (pets.raca === "Salsicha"){
        
              return  true     
         } else{
             return false
         }
     } )
     console.log(cachorroSalsicha);

     C:

     
     const cachorroPoodles = pets.filter((pets) => {
         if (pets.raca === "Poodle"){
           console.log(`você ganhou um cupom de 10% de desconto para tosar o/a ${pets.nome}`)
             return  true     
            } else{
                return false
                
            }
        } )
        console.log(cachorroPoodles);


        // exercicio 2

        const produtos = [
            { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
            { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.13 },
            { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
            { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
            { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
            { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
            { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
            { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
            { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
            { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
         ]


        //A:

        const listaAlimentos = produtos.filter (produtos =>{
            console.log(produtos.nome);
        })
        console.log(listaAlimentos);

        //B:

        const listaComDescontos = produtos.map(alimentos =>{
             console.log(alimentos.nome, parseFloat(alimentos.preco * 0.95).toFixed(2))
        } )
        
        //C:

        const categoriaBebidas = produtos.filter(produtos =>{
            if(produtos.categoria === "Bebidas"){
            return true
             } else {
            return false
             }
        } )
            console.log(categoriaBebidas);

            //D:

            const objetosYpe = produtos.filter(produtos =>{
                
                    if(produtos.nome.includes("Ypê")){
                   return true
                    } else {
                   return false
                    } 
                })
                console.log(objetosYpe);
   
            //  E:
            const comprarProdutos = produtos.filter(produtos =>{
              if (produtos.nome.includes("Ypê")){
                  console.log(`compre ${produtos.nome} por ${produtos.preco}`);
              return true
              } else {
                  return false
              }
            } )
            console.log(comprarProdutos);
       
          
