import React from 'react';
import CriarPlaylist from './components/CriarPlaylist';
import TelaDaPlaylist from './components/TelaDaPlaylist';



  export default class App extends React.Component{
    state = {
      telaAtual:"Criar"
    };

    trocarTela = ()=>{
      switch (this.state.telaAtual) {
          case "Criar":
          
        return <CriarPlaylist mudarTela = {this.irParaTelaDaPlaylist}/>
           case "lista":
      
        return <TelaDaPlaylist mudarTela = {this.irParaCriarPlaylist}/>
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

