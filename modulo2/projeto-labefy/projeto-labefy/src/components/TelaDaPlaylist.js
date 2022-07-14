import React  from "react";
import axios from "axios";
import CriarPlaylist from "./CriarPlaylist";
import DetalhesPlaylist from "./DetalhesPlaylist";


export default class TelaDaPlaylist extends React.Component {
    state = {
        Playlist:[],
        
    };
    componentDidMount (){
        this.visualizarPlaylist();
    }
    
    visualizarPlaylist = () => {
        const url =  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios
        .get(url,{
            headers: {
                Authorization:"Julia-Moreira-Freire",
            },
        })
        .then((resposta)=> {
            this.setState({ playlist: resposta.data});
        })
        .catch((erro) => {
            alert("Ocorreu um problema tente novamente");
          });
    };

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
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
    const listaPlaylist  = this.state.Playlist.map((playlist) => {
        return (
            <CriarPlaylist key={playlist.id}>
                {playlist.name}
                <button onClick={()=> this.deletarPlaylist(playlist.id)}>
                    {""}
                    deletar {""}
                </button>
            </CriarPlaylist>
        );
    });
    return (
        console.log({listaPlaylist}),
      <div>
        <h3> Lista de Playlist</h3>
        
         {listaPlaylist}
         <button onClick ={this.props.visualizarDetalhes}>  Detalhes da playlist </button>
        <button onClick ={this.props.CriarPlaylist}> Criar Playlist </button>
      </div>
    );
  };
}