import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    pessoas: [
      {
      nomeUsuario:"paulinha",
      fotoUsuario:"https://picsum.photos/50/50",
      fotoPost:"https://picsum.photos/200/150"
      },

       {
      nomeUsuario:"Julia",
      fotoUsuario:"https://br.pinterest.com/pin/4574037112613159",
      fotoPost:"https://br.pinterest.com/pin/3799980926353181"
    },
      
     {
     
      nomeUsuario:"Benicio",
      fotoUsuario:"https://br.pinterest.com/pin/4574037112613159",
      fotoPost:"https://br.pinterest.com/pin/3799980926353181"
      }
    ],
    valornomeUsuario: "",
    valorfotoUsuario: "",
    valorfotoPost:""

  };

  adicionaPessoa = () => {
    constNovaPessoa = {
      nomeUsuario: this.state.valornomeUsuario,
      fotoUsuario: this.state.valorfotoUsuario,
      fotoPost: this.state.valorfotoPost

    };

    const novasPessoas = [...this.state.pessoas, novasPessoas];
    this.setState({pessoas:novasPessoas});
  };

  onChangeInputPessoa = (event) => {
    this.setState ({
      valorInputnomeUsuario: event.target.value });

  };
   
  onChangeInputFoto = (event) => {
    this.setState ({ valorInputfotoUsuario: event.target.value });

  };

  onChangeInputPost = (event) => {
    this.setState ({ valorInputfotoPost: event.terget.value });
  };

  render() {
    const ListaPessoas = this.state.pessoas.map((pessoa) => {
    return (
      <p> 
        {pessoa.nomeUsu} - {pessoa.fotoUsuario} - {pessoa.fotoPost}
      </p>
    );
    });
  

   return (
     <div> 
     <p> App </p>
     <div>{ListaPessoas}</div>

     <input
     value={this.state.valorInputnomeUsuario}
      onChange ={this.onChangeInputPessoa}
      placeholder = {"nome-usuario"}
      />

     <input
     value={this.state.valorfotoUsuario}
      onChange ={this.onChangeInputFoto}
      placeholder = {"foto-usuario"}
      />

      <input
     value={this.state.valorInputfotoPost}
      onChange ={this.onChangeInputPost}
      placeholder = {"post"}
      />

      <button onClick={this.adicionaPessoa}> adicionar </button>
      <div> {ListaPessoas}</div>
     </div>
   
   );
  }
}
export default App;
