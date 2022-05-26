const condicao = true

if (condicao){
    console.log("entrei dentro do if pois a minha condicao e true");

}

if () {

}

// uma funcao que receba 2 numeros, compara os numeros entre si

function comparacao(num1, num2) {
    if (num1 === num2)
    console.log("os dois numeros sao iguais");
}

// criou 2 variaveis para o usuario escrever um numero
const primeiroNumero = Number( prompt("digite o primeiro numero"))
const segundoNumero = Number(prompt("digite o segundo numero"))

// chamar a funcao 
comparaNumero(primeiroNumero, segundoNumero)

// exemplo 2            if  pode usar sozinho o else nao
const condicao = true

if (condicao ){
    console.log("entrei no if pois a condico e verdadeira");
} else {
    console.log(" entrei no else pois minha condicao e falsa");
}

//exemplo 3

const comparaNumero = (num1, num2) => {
 if (num1 === num2)
 console.log("os numeros sao iguai");
} else {
console.log('os numeros sao diferenter');
}
const primeiroNumero= Number(prompt("digite primeiro numero"))
const primeiroNumero= Number(prompt("digite segundo numero"))

comparaNumero(primeiroNumero, segundoNumero)

exemplo 4

const condicao1 = false
const condicao2= true


if (condicao){
    console.log("entrei no primeiro if pois e verdadeira");
} else {
    if(condicao2) {
        console.log("entrei no segundo if pois e true");
    } else {
        console.log("entrei no segundo else, pois e false");
    }

}

// exemplo 5

const condicao1 = false
const condicao2 = false

if (condicao1) {
    console.log(" entrei mo primeiro if pois a condicao e true");
} else if (condicao2) {
    "entrei no else if, pois a condica2 e true"
} else {
    console.log(" entrei no else, pois a condicao1 e a condicao2 sao false");
}

// exemplo 6

const checaNumeros = (num1, num2) =>{
  if (num1 > num2)
console.log("o primeiro numero e maior que o segundo");
} else if (num1 < num2) {
    console.log(" o primeiro numeor e menor que o segundo");
} else {
    console.log(" os dois numero sao iguais");
}

const primeiroNumero= Number(prompt("digite primeiro numero"))
const primeiroNumero= Number(prompt("digite segundo numero"))

exemplo 6

  // switch case é usado so para comparacao de igualdade
  // break faz com que o codigo para de ser executado
  // ele não passa para as demais linhas

let paisDeOrigem = prompt("digite seu pais de origem")

switch (paisDeOrigem) {
     case"Brasil": 
          console.log("brasileiro");
     break
     case "Italia":
        console.log(Italiano);
     break
     case("Finlandia")
       console.log("finlandes");
     break
     default:
         console.log("pais nao encontrado");
}

exemplo 7


cont pokemomInicial = (" qual seu pokemom preferido")
switch (pokemomInicial){
    case "Bulbasauri":
        console.log("planta");
        break
    case "Charmander":
        console.log("fogo");
        break
        default:
            console.log("escolha pokemom valido, Bulbasauro, Charmander");
            break
}

exemplo 8

//condicionais e operadores logicos 


const condicao1 = true
const condicao 2 = false

if (condicao && condicao) {
    console.log(" alguma das condicoes sao verdadeira");
} else {
    console.log(" alguma das condicoes e falsa");
}

if(!condicao){
    console.log(" cai no if");

}

 // exemplo 9

 const estudarNaFaculdade = (ensinoMedio, maiorDeIdade, naoEstaCursandoFaculdade) =>

     if (ensinoMedio && maiorDeIdade && naoEstaCursandoFaculdade) {
     console.log(" pode entrar na faculdaade");
     } else {
         console.log(" nao pode entrar na faculdae");
     }

     const ensinoMedio = prompt(" voce ja concluiu a faculdade? sim/nao")
     const maiorDeIdade = prompt("voe tem mais de 18 sim/nao" )
     const naoEstaCursandoFaculdade = prompt("voce ja esta cursando outra faculdade? sim/nao")

     estudarNaFaculdade (ensinoMedio, maiorDeIdade, naoEstaCursandoFaculdade)

