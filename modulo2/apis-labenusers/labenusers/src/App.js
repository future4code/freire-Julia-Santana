
import React from 'react';
import './App.css';
import Api from './component/Api';
import TelaLista  from './component/TelaLista';

export default class App extends React.Component {

  state = {
    telaAtual:"cadastro",
   
  }
  escolherTela = ()=>{
    switch (this.state.telaAtual){
      case "cadastro":

      return <Api mudarTela={this.irParaLista}/>
      case "lista":

        return <TelaLista mudarTela = {this.irParaCadastro}/>
        default:

            return <div> Erro! página não econtrada  </div> 
        
    };
  };
   
  
  irParaCadastro = () => {
    this.setState({telaAtual:"cadastro"})
  };

  irParaLista = ()=>{
  this.setState({
    telaAtual:"lista"
  })
 };


  render(){
  return (
    <div className='App'>
   {this.escolherTela()}
   
    </div>
  );
};
}

