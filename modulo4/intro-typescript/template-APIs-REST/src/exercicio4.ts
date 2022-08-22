function comparaDoisNumeros(num1:number, num2:number) {
    let maiorNumero = 10;
    let menorNumero = 30;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
    const diferenca = maiorNumero - menorNumero;
    console.log(diferenca);
    
  
    
  
   console.log(10, 30);
   
  }