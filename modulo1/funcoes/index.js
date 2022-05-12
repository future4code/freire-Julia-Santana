// interpretação de código
// Respostas 1

// A: 10, 50 
// B: Se retirar o console.log, o resultado não vai aparecer
// porque sem o console.log, não é possível imprimir o resultado.

// resposta 2

// A: a funcão vai retorna uma frase em minusculo, porém
// com a palavra "cenoura" incluída, e ela automaticamente vai
// verificar se a frase esta correta ou errada, caso a frase
// não tenha a palavra cenoura, vai constar como false.
   
  // B: Eu gosto de cenoura

  //   Exercícios de escrita de código

    // exercicio A

  function imprimirFrase(){
     console.log("eu sou julia, tenho 20 anos, moro em limeira, e sou estudante"); }

     imprimirFrase()

     //Exercicio B

    function minhaVida(NOME, IDADE, CIDADE, PROFISSAO ){
         console.log(`eu sou ${NOME} tenho ${IDADE} anos, moro em ${CIDADE}, atuo como ${PROFISSAO}`);
     }
          minhaVida("Julia", 20, "Limeira", "Programador")

          // exercicio 2 

          //exercicio a

          function somarDoisNumeros(num1, num2 ){
               const soma = num1 + num2
               return soma
          }

         console.log( somarDoisNumeros(8, 12))
         
         //exercicio B

         function number(N1, N2){
             const ret = N1 >= N2
             return ret

         }
          
      console.log(number(150,100));
  
      // exercicio C

      function retornarNumero(nume1,  nume2) {
          const divisivel = nume1 % nume2 === 0
          return divisivel 


      }
      console.log(retornarNumero(10,5));

      // exercicio d

      function mensagem(texto){
         console.log(texto.length, texto.toUpperCase()); 
          
      }
     
    mensagem("Amo girassol")

    //exercicio 3

  const a = prompt("digite um numero")
  const b = prompt("digite um numero")
  console.log(` primeiro numero ${a}, segundo numero ${b}`);

   function soma(a, b){ 
          const resultado = Number(a + b)
          return resultado

    }
    console.log(a,b);
    soma(a,b)

    function multiplicacao(a* b){ 
        const resultado = Number(a * b)
        return resultado

  }
  console.log(a,b);
  soma(a,b)

  function divisao(a , b){ 
    const resultado = Number(a / b)
    return resultado

}
console.log(a,b);
soma(a,b)

function subtracao(a , b){ 
    const resultado = Number(a - b)
    return resultado

}


    