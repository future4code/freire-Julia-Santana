// Exercícios de interpretação de código

// exercicio 1
// A: O código vai verificar se o restante da divisão de tal  numero pelo 2 for
// igual a 0, entao o numero vai passar no teste, se não, não vai passar

// B: Todos os numeros que o restante da divisao for igual a 0

// C: todos que não forem iguais a 0

// exercicio 2

// A: o codigo serve para o usuário fazer uma pesquisa  mais rapida, e
// sem usar muito a memoria do computador.

// B: Se o valor da fruta for maça, vai ser impresso fruta  maça, preco = 2.25.

// C: se o usuário quiser comprar uma pêra, e o BREAK PARA O ITEM c.", for retirado
// o codigo continuará normal, pois esse break esta apenas comentado.

// exercicio 3

// A: a primeira linha esta executando um código para que o usuário possa digitar um número,

// B: Se o numero do teste for 10, então vai ser impresso a mensagem (" esse número passou no teste")
//  se for digitado um valor negativo ex: -10, o codigo ira retorna como erro, ou não vai retorna nada.

// C: se o número for maior que 0, então o número vai passar no teste,
// se não, se o numero for menor que 0, o codigo vai dar erro, pois não foi
// declarado um número menor para ser impresso.

//  Exercícios de escrita de código

//  exercicio 1

const idadeParaDirigir = Number(prompt("qual a sua idade?"));

if (idadeParaDirigir >= 18) {
  console.log("pode dirigir");
} else {
  console.log("não pode dirigir");
}

// exercicio 2

const horarioDeAula = prompt("Digite o horario que estuda, M, V, N ?");

if ("m") {
  console.log("Bom-Dia");
} else if ("v") {
  console.log("Boa-Tarde");
} else if ("n") {
  console.log("Boa-Noite");
}

// exercicio 3

const horarioDeEstudo = prompt(
  " qual turno você estuda? M, V, N"
).toUpperCase();

switch (horarioDeEstudo) {
  case "M":
    console.log("Bom-Dia");
    break;

  case "V":
    console.log("Boa-Tarde");
    break;

  case "N":
    console.log("Boa-Noite");
    break;

  default:
    "horario não encontrado";
}

// exercicio 4

const nomeDoFilme = prompt("Qual o genero do filme?");
const valorDoIngresso = Number(prompt("qual o valor do ingresso"));

if ("nomeDoFilme === fantasia && valorDoIngresso < 15 ") {
  console.log("Bom Filme!");
} else {
  console.log("Escolha Outro Filme!");
}

// exercicio 5

const nomeDoFilme1 = prompt("Qual o genero do filme?");
const valorDoIngresso1 = Number(prompt("qual o valor do ingresso"));

if ("nomeDoFilme === fantasia && valorDoIngresso < 15 ") {
  const lanche = prompt(
    "digite qual lanche vai querer, pipoca, chocolate, doces"
  );
  console.log(`Bom Filme!, aproveite o(a) ${lanche}`);
} else {
  console.log("Escolha Outro Filme!");
}
