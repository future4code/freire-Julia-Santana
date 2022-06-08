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
  render() {
    return (
      <MainContainer>
      <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      <Post
       nome={'Julia'}
       fotoUsuario={'https://br.pinterest.com/pin/4574037112613159'}
       fotoPost={'https://br.pinterest.com/pin/3799980926353181'}
       />

      <Post
       nome={'Benicio'}
       fotoUsuario={'https://br.pinterest.com/pin/4574037112613159'}
       fotoPost={'https://br.pinterest.com/pin/3799980926353181'}
       />

      </MainContainer>
    );
  }
}

export default App;
