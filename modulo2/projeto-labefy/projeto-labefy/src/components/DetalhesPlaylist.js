import React from 'react';
import axios from "axios";

export default class DetalhesPlaylist extends React.Component{

    state =  {
       music:{},
    };

     componentDidMount(){
        this.getAllPlaylists()
     };
     
     visualizarDetalhes = () => {
        const url =  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios
        .get(url,{
            headers: {
                Authorization:"Julia-Moreira-Freire",
            },
        })
        .then((resposta)=> {
            this.setState({ music: resposta.data});
        })
        .catch((erro) => {
            alert("Ocorreu um problema tente novamente");
          });
    };

    getAllPlaylists = () => {
        axios.get(this.props.url)
        .then((res)=> this.setState ({music:res.data}))
        .catch((erro) => {
            alert("Ocorreu um problema tente novamente");
          });
    };
    render (){
        return(
            <div> 
                <p> music:{this.state.music.music}</p>
                <button onClick={this.props.musicaAdicionada}> Adicionar Musica </button>
                <button onClick={this.props.CriarPlaylist}> CriarPlaylist</button>
            </div>
        )
    };
}
