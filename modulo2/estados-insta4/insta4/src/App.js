import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const PNome = styled.p`
 font-size: 15px;
`
const Imagem = styled.img`
 width: 150px;
 
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
      fotoUsuario:"https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      fotoPost:"https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
    },
      
     {
     
      nomeUsuario:"Benicio",
      fotoUsuario:"https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ",
      fotoPost:"https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w"
      }
    ],


  };

  adicionaPessoa = () => {

    const NovaPessoa = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost

    };
           
    const novasPessoas = [this.state.pessoas, NovaPessoa];
   
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
    const ListaPessoas = this.state.pessoas.map((obj) => {
    return (
      <div>
      <PNome> 
        {obj.nomeUsuario} 
      </PNome>
      <Imagem src={obj.fotoUsuario}  ></Imagem>
      <Imagem src={obj.fotoPost}  ></Imagem>
      </div>
    );
    });
  

   return (
     <div> 
     <p> App </p>

     <input
     value={this.state.valorInputnomeUsuario}
      onChange ={this.onChangeInputPessoa}
      placeholder = {"nome-usuario"}
      />

     <input
     value={this.state.valorInputfotoUsuario}
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
