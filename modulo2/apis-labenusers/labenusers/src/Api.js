import React from 'react';
import axios from "axios";

export default class Api extends React.Component {
  state = {
    nome:"",
    email:"",
    lista:[],
    tela:'cadastro'
   
  };

   componentDidMount(){
       this.createUser();
   };

  createUser =()=>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
     {header:{Authorization:"Julia-Moreira-Freire"}}).then((response)=>{alert('usuario adicionado com sucesso')
      this.setState({nome: response.data.result.list})
     }).catch((error)=> {console.log(error.message)})
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

   onChangeLista = (event)=>{
    this.setState({
      lista:event.target.value
    })
   };

   telaDetalhes = ()=> {
    if (this.state.tela ===" cadastro"){
      this.setState({tela: 'lista'})
    }
    if (this.state.tela === 'lista') {
      this.setState({ tela: 'cadastro'})
    }
   };
   
  


  
  render() {
    return (
      <div className="App">
     <h1> Integração de Api</h1>
     {/* <section> {this.state.user.map ((user)=>{ return <p key= {this.state.id}> {user.name} </p>
    })}</section> */}
  <button onClick={this.trocarTela}>trocar tela</button>
  
      
    <section> 
    <input
            value={this.state.name}
            onChange={this.onChangeName.onChangeEmail}
            placeholder="digite seu nome"
          />

<input
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="digite seu email"
          />


          <button onClick={this.create}>Criar Usuario</button>
      
          <br/>
          
          
         
        </section>

  
      </div>

);
};
}


  
  