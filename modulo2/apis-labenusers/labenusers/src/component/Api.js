import React from 'react';
import axios from "axios";

export default class Api extends React.Component {
  state = {
    nome:"",
    email:""
    
    
   
  };
  onChangeName = (event)=>{
    this.setState({
      nome:event.target.value
    })
   };

   onChangeEmail = (event)=>{
    this.setState({
      email:event.target.value
    })
   };

 
  fazerCadastro =()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.nome,
      email:this.state.email
    };

     axios.post(url, body, {
      headers:{
        Authorization:"Julia-Moreira-Freire"
      }
     })

     .then((resposta)=>{
        alert("Usuário(a) cadastrado(a) com sucesso")
        this.setState({nome:"", email:""})
     })
     
     .catch((erro)=>{
         alert(erro.response.data)
     })
  };

   
  
  render() {
    return (
      <div className="App">
     <h1> cadastro </h1>
  <div>
    {this.escolhaTela}
  </div>
     
  <button onClick={this.props.mudarTela}>trocar tela</button>
  
      
    <section> 
    <input
            value={this.state.nome}
            onChange={this.onChangeName}
            placeholder="digite seu nome"
          />

<input
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="digite seu email"
          />


          <button onClick={this.fazerCadastro}>Criar Usuario</button>
      
          <br/>
          
          
         
        </section>

  
      </div>

);
};
}


  
  