string maneira de escrever uma
 console.log("bom dia")
 console.log('tudo bem');
 console.log(`estou bem`);

 const nome = 'julia'

 console.log('meu nome e', nome );

concatenacao
//  se não colocar a virgula vai 
//  juntar os elementos, ex julia+
console.log('meu nome e', + nome);

//templete string
console.log(`meu nome e ${nome} e e estou aprendendo a programar`); // com crase
// irá reconhecer do mesmo jeiro, que 
//utilizando a virgula.

alert(`BOM DIA!! ${nome}`)



const nome = prompt(' qual seu nome?')

const cor = prompt(' qual sua cor favorita?');

console.log(`a cor favorite de ${nome} e ${cor}`)

//ptototipos strings

const nome = "julia moreira"
console.log(nome.length) // (length) conta os caracterer, vai retorna 13 caractere, porque conta os espaços tambem.

const taman = nome.length
console.log(taman)

// // deixar a palavra maiuscula
// const nomeLetraMaiuscula = nome.toUpperCase()
// console.log(nomeLetraMaiuscula); // (toUpperCase) o nome fica maiusuculo automaticamente ex JULIA MOREIRA

// console.log(nome.toLowerCase()) // (toLowerCase)tudo fica minusculo ex julia moreira
// const nome = " Julia  moreira"

// console.log(nome.toLowerCase(), e o seu nome) 

// console.log(nome.trimEnd(), qual seu nome);//( trimEnd ) tira espaços do começo e final, ex email

// const frase = "hoje comi bolo com cafe"
// console.log(frase)

const novaFrase = frase.replaceAll("bolo" , "tapioca")
// console.log(novaFrase) //troca a palavra bolo por tapioca. ex: vai ficar
// // hoje comi tapioca com bolo.

// const frase = prompt('escreva uma frase')
// const fraseMaiuscula = frase.toUpperCase()
// console.log('fraseMaiuscula');
// // a frase vai ficar assim: HOJE EU COMI BOLO

// const fraseLinguaDoI = fraseMaiusucula.replaceAll("O" , "I")
// console.log('fraseLinguaDoI');
// // a frase vai ficar assim: HIJI EU CIMI BILI

// const tamanhoDaFrase = frase.length
// console.log(tamanhoDaFrase);
// // a frase vai ficar assim: 14 caractere




// const fraseM = Frase.toUpperCase().replaceAll("O", "I") //outra forma de escrever os
// //comandos

// //arrays
//                 0          1          2 3     4    5    
// const lista =["banana", "chocolate", 1, 2, true, false]

// console.log(lista);

// console.log(lista[2]); //mostra qual é o item
// // 2 da lista, lembrando que o array comeca a 
// //contar do 0.

// console.log( o item dois da minha lista e ${lista [2]}`);

// const segundoElementoDaLista - lista[2]
// console.log(segundoElementoDaLisTA);
//                          0            1       2       3     4        
// Const listaAnimais = ["cachorro", "leao", "gato", "onca", "pinguim"]
// const num = prompt(" escreva um numero de 1 a 5")

// console.log('listaAnimais'[num - 1]);

// // metodo pop
// Const listaAnimais = ["cachorro", "leao", "gato", "onca", "pinguim"]
// console.log('listaAnimais');

// listaAnimais.pop()
// console.log(listaAnimais); // tira a ultimo elemento
// //da lista

// console.log(listaAnimais.length);

// //indice(i)
// Const lestra = ["a", "b", "c", "d", "e"]

// letras.splices(2,5)

// console.log(letras) //['a', 'b', 'h',];
//  //indice(i)
// letras.splices(2,1)

// console.log(letras); // tira elemento a partir de uma 
// //tal posicao (N) elemento (i) do array, uma posicao por vez
// //ex letras.splices(2,3)
// //ex letras.splices(2,3)

// //push

// const numero = [1, 2, 3]

// console.log(numero);

// numero.push(4) // adiciona elemento

// numeros.push(1, 2, 3, "tiremduvidas")
// console.log(numeros);


// trocar um numero pelo outro
//function trocaPrimeiroEUltimo() {
//    let  listaNumeros = [1, 2, 3, 4, 5]
//    listaNumeros[0] = 5
//    listaNumeros[4] = 1

//  console.log(listaNumeros, listaNumeros);

// }
// console.log(trocaPrimeiroEUltimo()); 