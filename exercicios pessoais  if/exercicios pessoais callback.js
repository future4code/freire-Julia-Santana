const numero = 5
if (numero % 2 === 1){
    
} 
const  verificadorImpara = (numero) =>{
    if numero % 2 === 1 {
    console.log(sim, e impar);
}
}
const imprimirMensagem = (numero)=> {
  console.log(`sim, ${numero} impar`);
}
verificadorImpara(5, imprimirMensagem)

// simplificado 

const verificadorImpara (5, (numero)=>{
    console.log(`sim ${numero} e impar`);
}

// map
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
 const imprimirMensagem =(pokemons, indice, array) =>{  // calback
     console.log("primeiro parametro:, pokemons, indice,:array");
     return pokemom.nome
 }
const nomesPokemons = pokemons.map(imprimirMensagem)
console.log(nomesPokemons);


    const sequencia = [10, 80, 47, 23, 11, 200]
const sequencia = sequencia.map((numero, indice)=>{
    console.log(`o elementov ${indice} e ${numero}`);

}
console.log("sequencia,"), sequencia;


// filter

const novaListaPokemons = pokemons.filter((pokemom) => {
    console.log(pokemom.novaListaPokemons);
    if(pokemom.tipo ==="grama"){
        return true
    }
})
console.log(pokemons);
// map altera o valor, o filter mostra o que nos queremos

// exercicio 3

const listaNumerica = [1, 5, 6, 7, 9, 4, 6 ]
const numerosMaiores10 = listaNumerica. filter((numero) =>
{          
    console.log(numero)
        if(numero > 10); {
            return true
        }
})
  console.log(numerosMaior10);

  const listaNumerosPar = listaNumerica.filter((numero) =>
  {
      if(numero % 2 === 0)
      return true
  })

  console.log(listaNumerosPat);




  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }


   // da categoria de limpeza
   const listaItemLimpexa = produtos.filter(() =>{
       if (produtos. categori === "limpeza")
       console.log(produtos.categoria)
   }
   )
   // retorna um novo array com o nome dos produtos 
  const produtos = [
    "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }

  const nomedosprodutos = listaItemLimpexa.map((produto)=>
 { console.log(produto.nome);
    return produto.nome

 } )
 console.log(nomeprodutos);