import React from 'react';
import CardGrande from '../CardGrande/CardGrande';
import CardPequeno from '../CardPequeno/CardPequeno';
import ImagemButton from './ImagemButton';
import julia from './julia.png'
import styled from 'styled-components'

const Apps = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const section = styled.div `
   width: 40vw;
  margin: 10px 0;
`
const palavra = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;  
`

function App() {
  return (
    <Apps>
      <section>
        <palavra> Dados pessoais </palavra>
        <CardGrande 
          imagem= {julia}
          nome="Julia" 
          descricao="Oi, eu sou a Julia. Sou aluna  da Labenu. sou apaixonada por animais, moda e tecnologia ja trabalhei como assistente administrativo, antes de estudar na Labenu"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </section>
      <CardPequeno
        email="julia_mor@gmail.com" 
        endereço="São Paulo"     
        />
      <div className="page-section-container">
        <palavra> Experiências profissionais </palavra>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <palavra> Minhas redes sociais </palavra>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />  

      
      </div>
    </Apps>
  );
}

export default App;
