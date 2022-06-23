import React, { useReducer } from "react";
import axios from "axios";


export default class TelaDaPlaylist extends React.Component {
    state = {
        Playlist:[],
    };
    componentDidMount (){
        this.pesquisarPlaylist();
    }
    
    visualizarPlaylist = () => {
        const url = 
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        axios.get(url,{
            headers: {
                Authorization:"Julia-Moreira-Freire",
            }
        })
        .then((resposta)=> {
            this.setState({ playlist: resposta.data});
        })
        .catch((erro) => {
            alert("Ocorreu um problema tente novamente");
          });
    };

    deletarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId"

        axios.get(url,{
            headers:{
                Authorization:"Julia-Moreira-Freire",
            }
        })
        .then((resposta)=> {
            alert("playlist removida com sucesso");
            this.visualizarPlaylist();
        })

        .catch((erro) => {
            alert("ocoreu um erro, tente novamente")
        })
    };
  render(){
    const listaPlaylist = this.state.Playlist.map((musicas) => {
        return (
            <listaPlaylist key={useReducer.id}>
                {musicas.name}
                <button onClick={()=> this.deletarPlaylist(musicas.id)}>
                    {""}
                    deletar {""}
                </button>
            </listaPlaylist>
        );
    });
    return (
      <div>
        <h3> listaPlaylist</h3>
        {listaPlaylist}
        <button onClick ={this.props.mudarTela}> ir para Criar Playlist </button>
      </div>
    );
  }
}