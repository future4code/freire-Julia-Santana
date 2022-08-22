import express from "express";

import { AddressInfo } from "net";

import { dadosApi } from "./dados";

import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors())

//renderizar nome pong 

app.get("/ping", (req, res)=>{
    res.send("pong")
})
console.log("pong");


// retorna apenas as tarefas que foram completadas

app.get("/toDoListStatus/:completed", (req, res)=>{
    const lista = req.params.completed

    const tarefas = dadosApi.map(tar=>{
        return tar.completed.toString() === lista
    })
    console.log(tarefas);
})

// // criar um array de afazeres 

 app.post("/toDoListStatus", (req, res)=>{
    const authorization = req.headers.authorization
    const newName = req.body.namePlaylist

    const novaLista = {
        {
            userId: req.body.userId,
            id:req.body.id,
            name: req.body.name,
            completed:req.body.completed
        }
    for (let dadosApi of novaLista){
     
        if(dadosApi.id === authorization){
            dadosApi.push(novaLista)
        }
         res.send({authorization, novaTarefa})
    }
})

//excluir tarefas

app.delete('/listaTarefas/:listaTarefasId/tracks/:trackId', (req,res)=>{

    const trackId = req.params.trackId
    const playlistId = req.params.listaTarefasId
    const listaTarefasAFazer = dadosApi
    
   // listaUsers -> playlists ( tem essa id? ) -> tracks (tem essa track? ) - deletar a track
    for (let tarefa of listaTarefasAFazer){
        for (let listaTarefas of tarefa.listaTarefas){
            if(listaTarefas.id === listaTarefasId){
                listaTarefas.tracks.forEach( track =>{
                    if(track.id === trackId){
                    const index = listaTarefas.tracks.indexOf(track)
                    listaTarefas.tracks.splice(index)
                    }

                })
            }
        }
   
    }
}),

// retornar uma tarefa atraves de um id 



 app.listen(3003,()=>{
    console.log("Server rodando na porta 3003: [http://localhost:3003]")
 })
