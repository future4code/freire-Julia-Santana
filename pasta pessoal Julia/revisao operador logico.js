const maiorDeIdade = Number(prompt("digite sua idade"))
const alturaUsuario= Number(prompt("digite sua altura"))
const  problemaCardiaco= prompt(" têm algum problema cardiaco? s/n")

if (maiorDeIdade >= 18 && alturaUsuario >= 160 && problemaCardiaco === "N" ){
    console.log('entrada altorizada');
} else {
    console.log('proibida a entrada');
}