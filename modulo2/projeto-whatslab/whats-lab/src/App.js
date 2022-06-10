import React from 'react';
import './App.css';

class Mensagem extends React.Component {
  state = {
  redeSocial:[
  {
      texto: "oiii",
      usuario: "Julia"
  },
],
     valorInputUsuario: "",
     valorInputMensagem: ""
      
  }
  

  adicionaMensagem = () => {
      const NovaMensagem = {
          texto : this.state.valorInputMensagem,
          pessoa: this.state.valorInputUsuario
      }
      const MensagensNovas = [...this.state.redeSocial, NovaMensagem];
      this.setState({ redeSocial: MensagensNovas });

  };

 
  onChangeInputUsuario = (event) => {
      this.setState({valorInputUsuario:event.target.value});
  };

  onChangeInputMensagem = (event) => {
      this.setState ({valorInputMensagem: event.target.value})
  };

  render (){
      const MensagensTexto = this.state.redeSocial.map((rede)=>{
          return(
          <p>
              {rede.texto} - {rede.usuario}
          </p>
          )
      });
      
      return(
          <div>
      <h1> Mensagem </h1>
      
      <div>
      <input value = {this.state.valorInputUsuario}
      onChange = {this.onChange.valorInputUsuario}
      placeholder = {"usuario"}/>
      
      <input value = {this.state.valorInputMensagem}
      onChange = {this.onChange.valorInputMensagem}
      placeholder = {"mensagem"}/>
      
      <button onClick = {this.adicionaMensagem}> adicionar </button>
      </div>
      <div> {MensagensTexto}</div>
      </div>
  );
  };
}
  
  export default Mensagem
