import { textSpanEnd } from "typescript"

test("verificando se o numero é par", ()=>{
    expect(isEven(112)).toBe(true)
})

test("Se existe a palavra BANANINHA", ()=>{
  expect(nome("bananinha")).toBe(true)
})

// test(" se o dev for um array  'd' , 'e', 'v'"), ()=>{
//     expect(nomeDev("'d', 'e', 'v'")).toBe(true)
// }
const isEven=(intenger:number)=>{
    if(intenger % 2 == 0){
        return true
    }else{
        return false
    }
} 

const nome =(bananinha:string)=>{
    if(bananinha === bananinha.toUpperCase()){
    return bananinha
}else{
    return false
}
}

// const nomeDev = (dev:string)=>{
//     if(dev === "'d', 'e', 'v' "){
//         return dev
//     }else{
//         false
//     }
//     return dev
// }

// const numeros  =(number:string)=>{
//     if(number  50){

//     }
// }
