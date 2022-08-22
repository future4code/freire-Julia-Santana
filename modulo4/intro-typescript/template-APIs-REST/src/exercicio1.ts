function sum (a:string, b:string, c:string):void{
    if (a !== b && b !== c) {
        console.log("Escaleno");
      } else if (a === b && b === c) {
          console.log("Equilátero");
      } else {
          console.log("Isósceles");
      }
}

sum('a', 'b', 'c')
   
  
 
//   const objeto = {
//     nome: "julia",
//     quantidade: 1,
//     metodo: function (nome) {
//         console.log(nome || "nome não recebido");
//     }
// };
// objeto.metodo("turma freire");
// {
//     if (marca == undefined) {
//         return frota;
//     }
// }
// return frota.filter((carro) => {
//     return carro.marca === marca;
// });
// const arrayDeMarca = ["fiat", "Toyots", "BMW"];
// const buscaPorMarca = (frota, marca) => 
// () => {
// };
// const resposta = buscaPorMarca(arrayDeMarca, "fiat");
// console.log(resposta);