import React from 'react';
import axios from "axios";




export default class AdicionarMusica extends React.Component{

    state =  {
        name:"",
        artist:"",
        url:"",
    }
    onChangeName = (event)=>{
        this.setState({
          name:event.target.value
        })
       };
       onChangeArtist = (event)=>{
        this.setState({
          artist:event.target.value
        })
       };
       onChangeUrl = (event)=>{
        this.setState({
          url:event.target.value
        })
       };

     componentDidMount(){
        this.addTrackToPlaylist()
     }
     
     musicaAdicionada = () => {
        const id =  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks";

        const body = {
            name: this.state.name,
            artist:this.state.artist,
            url: this.state.url,

          };
   axios.post(id, body, {
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

    getAllPlaylists = () => {
        axios.get(this.props.url)
        .then((res)=> this.setState ({musica:res.data}))
        .catch((erro) => {
            alert("Ocorreu um problema tente novamente");
          });
    }
    render() {
        return (
          <div className="AdicionarMusica">
         <h3> Adiciona uma Musica </h3>
      <div>
        {this.musicaAdicionada}
      </div>
         
      <button onClick={this.props.mudarTela}>Voltar para Detalhes da Playlist</button>
      
          
        <section> 
    <input
                value={this.state.nome}
                onChange={this.onChangeName}
                placeholder="digite o nome da Música"
              />
    
    <input
                value={this.state.email}
                onChange={this.onChangeEmail}
                placeholder="digite a banda"
              />
    <input
                value={this.state.email}
                onChange={this.onChangeEmail}
                placeholder="Coloque a Url"
              />
    
    
              <button onClick={this.musicaAdicionada}>AdicionarMusica</button>
              <button onClick={this.props.CriarPlaylist}> CriarPlaylist</button>
          
              <br/>
              
              
             
            </section>
    
      
          </div>
    
    );
    };
    }