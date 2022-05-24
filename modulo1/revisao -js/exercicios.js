// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray() {
   const lista = [1,2,3,4,5,6]
   return lista.length
   
}
console.log(retornaTamanhoArray());

// EXERCÍCIO 02
function retornaArrayInvertido() {
   const lista = [1, 2, 3, 4, 5]
   return lista.reverse()
}
console.log(retornaArrayInvertido());

// EXERCÍCIO 03
function retornaArrayOrdenado(array = [50, 40, 30, 20, 10]) {
      return array.sort()
   }
   console.log(retornaArrayOrdenado());



// EXERCÍCIO 04
function retornaNumerosPares(){
         const array = [5, 8, 4, 2, 9, 6]
      const listaNumerica = array.filter(valor => valor % 2 === 0 )
       return listaNumerica  
      }
console.log(retornaNumerosPares());

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array = [ 8, 4, 2, 6, 11, 13]) {
      const listaNumerosPar = array.filter(valor => valor % 2 === 0)
      const listaNumerosParElevado = listaNumerosPar.filter(valor => {
         return valor **2 
      } )
      return  listaNumerosParElevado

}
console.log(retornaNumerosParesElevadosADois());

// EXERCÍCIO 06
function retornaMaiorNumero(array = [1, 5, 8, 2]) {
   let maior = 0;
   
   for (let i = 0; i < array.length; i++) {
      if ( array[i] > maior ) {
         maior = array[i];
      }
   }
   return maior
}
console.log(retornaMaiorNumero());
   

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1 = 10, num2 = 5) {

   if ( valor2 = num1 > num2 ) {
      console.log(valor2);
      return valor2

   }  else if (valor3 = num1 % num2 === 0){
      console.log(valor3);
      return valor3

   }  else if (  valor = num1 - num2){
      console.log(valor);
      return valor
   }
   
}
   console.log(retornaObjetoEntreDoisNumeros());
   
// EXERCÍCIO 08
function retornaNNumerosPares() {
   const numerosPares = [1, 5, 2, 7, 4, 0];
  numerosPares.filter(function (valor){
   
     return valor % 2 === 0
  }).map(function (valor){
     console.log(valor);
     return valor
  })
}

console.log(retornaNNumerosPares());

// array.filter(valor => valor % 2 === 0 )


// EXERCÍCIO 09
function classificaTriangulo() {
    const ladoA = 5
    const ladoB = 5
    const ladoC = 3

   if(ladoA === ladoB === ladoC){
      return "Equilátero"
   } else if ( ladoA === ladoB  || ladoB === ladoC ){
      return "Isósceles"
   } else {
         return "Escaleno"
   }
}
console.log(classificaTriangulo());

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor() {
 const listaDeNumeros = [1, 5, 4, 2, 6] 
const numeroMaior = listaDeNumeros.reduce(function(acumulador, valor){
      if(acumulador > valor) {
         return acumulador
      } 
      return valor - 1
})
      console.log(numeroMaior);

      const numeroMenor= listaDeNumeros.reduce(function(acumulador, valor){
         if(acumulador < valor) {
            return acumulador         
         } 
         return valor + 1
      })
      console.log(numeroMenor, numeroMaior);
   }
   console.log(retornaSegundoMaiorESegundoMenor());
            



// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const nome = "Alice no pais das Maravilhas"
   const ano = "1865"
   const diretor ="Tim Burton"
   const elenco =  "Johnny Depp, Mia Wasikowska"

    return `venha assistir o filme ${nome}, de ${ano}, dirigido por ${diretor}, e estrelado por ${elenco}` 
   
}
    console.log(retornaChamadaDeFilme());
    
// EXERCÍCIO 12
function retornaPessoaAnonimizada() {
   const pessoa1 = {
      let nome: ("Julia"),
      let idade: 19,
      let endereco: ("São Paulo"),
      let email: ju_santana@gmail

   }   return pessoa1 

     const pessoa2 {
     ...pessoa
     nome: "Anônimo"
     idade: 19,
     endereco: ("São Paulo"),
     email: ju_santana@gmail

     return pessoa2 
     }
} 
   console.log(retornaPessoaAnonimizada());



// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoa){
 //  const pessoa1 = {
   { nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}

     if(nome.idade > 14) {
        return "pessoa autorizada"
     } else if (nome.altura >= 1.5){
        return "pessoa autorizada"
     } else if (nome.idade < 60){
        return "pessoa autorizada"
     }
   }
}
    console.log(retornaPessoasAutorizadas());
     
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   { nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}

     if(nome.idade < 14) {
        return "pessoa não autorizada"
     } else if (nome.altura < 1.5){
        return "pessoa não autorizada"
     } else if (nome.idade > 60){
        return "pessoa não autorizada"
     }
   }
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
[
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]
       return contas.map ((cliente)=> {
          clientes.compras.map((compra) => {
          cliente.saldoTotal = cliente.saldoTotal - compra
          cliente.compras = []
          })
          return cliente
       })
}
           console.log(retornaContasComSaldoAtualizado());

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData() {
   const consultas = [ 
      { nome: "João", dataDaConsulta: "01/10/2021" },
      { nome: "Pedro", dataDaConsulta: "02/07/2021" },
      { nome: "Paula", dataDaConsulta: "03/11/2021" },
      { nome: "Márcia", dataDaConsulta: "04/05/2021" }
   ]
    
       return consultas.sort()    
}
console.log(retornaArrayOrdenadoPorData());