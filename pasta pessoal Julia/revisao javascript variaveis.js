let nomeDoProduto = prompt("escreva um nome de qualquer produto:")

let valorDoProduto = Number(prompt("digite o valor desse produto:"))
 
    valorDoProduto = valorDoProduto - 1 // dando 1 real de desconto
    console.log(`produto ${nomeDoProduto}, custa r$ ${valorDoProduto}`);

