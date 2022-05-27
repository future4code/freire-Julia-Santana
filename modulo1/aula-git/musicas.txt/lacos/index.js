// Exercícios de interpretação de código

// resposta exercicio 1
// 10

// Resposta exercicio 2

//    A: 10 [19, 21, 23, 25, 27, 30]
//    B:     const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

//     let listaNumero = lista
//     for (let i of lista){
//      lista1  = `${lista} + ${i}`
//    }
//    console.log(lista);

// console.log(listaNumero);

// Resposta exercicio 3

//     *
//    **
//   ***
//  ****
//     3


       // Exercícios de escrita de código

       const animais = Number(prompt("Quantos animais de estimação você têm?"))
       if (animais === 0){
           console.log("Que pena! Você pode adotar um pet!");
       } else {
           let listaPets = []
           for (let i = 0; i < animais; i++) {
            listaPets.push(prompt("digite o nome dos pets"))
               
           }
           console.log(listaPets);
       } 
          
      // exercicio 2

      A: const listaNumeros2 = [10, 25, 78, 96, 34, 14]
          function lista (listaNumeros){
      for(let i of listaNumeros2){       //criar laco 
          
        console.log(i);
      }
    }
     lista(listaNumeros2)
    


      B:  const numeros1 = [10, 25, 78, 96, 34, 14]

      function lista1 (numeros1) {
          for(let i of numeros1 ){
            
              console.log(i/10);
            }
      }
      lista1(numeros1)
      listaNumeros

      C: const novaLista = [10, 78, 96, 34, 14]
      function numerica (novaLista){
          for(let i of novaLista ){


          console.log(i);
          }
      } 
      numerica(novaLista)


     D: 

        

        function frase() {
            const sequencia = [10, 80, 47, 23, 11, 200]
            const frase1 = [ " o elemento do index  é "]
        for(let i = 0; i<6; i++){
        console.log(`${frase1} ${i}, ${sequencia[i]}`)
           }
        }
        console.log(frase());

   
        function maiorMenor(listaNumeros) {
    E:   const listaNumeros = [10, 25, 78, 96, 34, 14]  
         let valorMaximo = 96
         let valorMinimo = 10
    
   
          console.log(`O maior numero da lista é ${valorMaximo}, e o menor e ${valorMinimo}`)

        }
        console.log(maiorMenor());
        
       
        
        


      