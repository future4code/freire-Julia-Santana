```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    qtdeCarrosVendidos = 5
    valorTotalVendas = 300000
   const comissao = 0.05
   const salario = 2000
  
     const bonus = (valorTotalVendas * comissao) + (qtdeCarrosVendidos * 100)
 

     const total = bonus + salario;
    
    return total
      
}
console.log(calculaSalario()) ``` 