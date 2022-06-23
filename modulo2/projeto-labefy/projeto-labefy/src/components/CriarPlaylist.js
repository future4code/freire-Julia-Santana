import React from 'react';
import axios from "axios";

export default class Playlist extends React.Component{

    state = {
        nome:""
    }

    onChangeName = (event) => {
        this.setState({
            nome:event.target.value
        })
    };


    criarPlaylist = ()=>{
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";


        const body = {
            name:this.state.nome
           };

        axios.post(url,body, {
            headers:{
                Authorization:"Julia-Moreira-Freire"
            }
        })

        .then((resposta)=> {
            alert("Playlist criada com sucesso")
            this.setState({nome:""})
           })
        .catch((erro)=>{
            alert(erro.response.data)
        })

    };

    render(){
        return (
            <div className="Playlist">
               <h1> Criar Playlist </h1>
               <button> Olhar minha Playlist </button>
               <setion>
                <input>
                value ={this.state.nome}
                onchange={this.onChangeName}
                placeholder="Digite o nome da sua playlist"
                </input>
               </setion>
            </div>
        )
    }
}
