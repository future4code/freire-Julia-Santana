import React from 'react';
import CriarPlaylist from './components/CriarPlaylist';
import TelaDaPlaylist from './components/TelaDaPlaylist';
import DetalhesPlaylist from './components/DetalhesPlaylist';
import AdicionaMusica from './components/AdicionarMusica';



  export default class App extends React.Component{
    state = {
      telaAtual:"Criar"
    };

    detalhesPlaylist = (url)=> {
      this.setState ({currentScreen:"detail", urlPlaylist:url })
   }
   adicionarMusica = (id)=> {
    this.setState ({musicaid:id })
 }

    trocarTela = ()=>{
      switch (this.state.telaAtual) {
          case "Criar":
          
        return <CriarPlaylist mudarTela = {this.irParaTelaDaPlaylist}/>
           case "lista":
      
        return <TelaDaPlaylist mudarTela = {this.irParaDetalhesPlaylist} url={this.state.urlPlaylist}/>
        case "detalhes":
          return <DetalhesPlaylist mudarTela = {this.AdicionaMusica} />
          case "adicionar":
          return <AdicionaMusica mudarTela = {this.irParaCriarPlaylist}/>
          default:
        return <div> Tela não encontrada </div>

        
      
      };
    };

    irParaCriarPlaylist = () => {
      this.setState({telaAtual:"Criar"})
    };

    irParaTelaDaPlaylist = () => {
      this.setState({
        telaAtual:"lista"
      })
    };

    render(){
  return (
    <div className='App'> 
     
        {this.trocarTela()}
    </div>
  );
};
  }


