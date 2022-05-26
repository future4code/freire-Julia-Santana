const num1 = Math.floor(Math.random() * 10)  +1// tag para sortear um numero
const num2 = Number(prompt('digite um numero 1 a 10:'))

console.log(`o numero sorteado foi ${num1}`);

if (num1 >= num2){
    console.log('o numero sorteado é maior ');

}  else if (num1 < num2){
    console.log('o numero sorteado é menor');

} else {
    console.log('os numeros são iguais');
}