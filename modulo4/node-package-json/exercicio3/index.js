// import {listaDeTarefas} from './listaDeTarefas'
const listaDeTarefas = require("./listaDeTarefas")

 const value = process.argv[2]
listaDeTarefas.push(value)
console.log(listaDeTarefas);