let listaNumerica = [1, 2, 3, 4, 5, 6]

let dividindo =(listaNumerica) =>{
    const num1 = listaNumerica[0] / 2
    const num2 = listaNumerica[5] / 2


listaNumerica[0]= num1
listaNumerica[5] = num2
return listaNumerica
}
console.log(dividindo(listaNumerica));