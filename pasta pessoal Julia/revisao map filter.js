const produto = [
 {nome:"girassol", categoria:"planta", preco: 5,0}
]

const produtoDesconto = produto.map(prod) =>{
  return {...prod, preco:prod.preco * 0.9}
}
console.log(produtoDesconto);  // adicionr desconto

const produto = [
    {nome:"girassol", categoria:"planta", preco: 5,0}
   ]
   
   const produtoDesconto = produto.map((prod) =>{
     return {...prod, preco:(prod.preco * 0.9).toFixed(2)} // deixa o resultado com 2 casas decimais
   })
   console.log(produtoDesconto);

   const categoria = produtos.filter((prod) =>{
     return prod.categoria === "planta"
   })
   console.logplanta;  // mostra só a categoria = planta

   const categoria = produtoDesconto.filter((prod) =>{
    return prod.categoria === "planta"
  })
  console.logplanta;  //
   retorna apenas os itens categorias com 10% de desconto

     // encadear

     const categoriaprodutoDesconto = produtoDesconto.filter((prod) =>{
        return prod.categoria === "planta"
      }) .map((prod) =>{
        return {...prod, preco:(prod.preco * 0.9).toFixed(2)} 
      })
         console.log(categoriaprodutoDesconto);


   