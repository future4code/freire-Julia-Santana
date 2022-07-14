import React from 'react';
import axios from "axios";

export default class CriarPlaylist extends React.Component{

    state = {
        nome:""
    }

    onChangeName = (event) => {
        this.setState({
            nome:event.target.value
        })
    };


    CriarPlaylist = ()=>{
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
              <div>
                   {this.mudarTela}
               </div>
               <section>
                <input
                value ={this.state.nome}
                onChange={this.onChangeName}
                placeholder="Digite o nome da sua playlist"
                />
                <button onClick={this.CriarPlaylist}>Criar Playlist </button>
               </section>
               <br/>
               <button onClick ={this.props.mudarTela}> Olhar minha Playlist  </button>
            </div>
        );
    };
}
