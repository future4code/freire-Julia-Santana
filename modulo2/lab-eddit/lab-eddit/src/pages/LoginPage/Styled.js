import styled from "styled-components";

export const logo = styled.div`
 width: auto;
  height: auto;
  display: flex; 
  justify-content: center;
  padding:10px;
  margin: 0;
`

export const titulo = styled.h1`
display: flex;
justify-content: center;
text-align: center;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 36px;
margin: 0;
`
export const subTitulo = styled.p`
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
text-align: center;
margin: 0;
`

export const botaoContinuar = styled.button`
display: flex;
justify-content: center ;
align-items: center;
padding: 13px 133px;
gap: 10px;
margin-top: 40px;

background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
border-radius: 27px;

color:#fff;
`
export const botaoCriarConta = styled.button`
display: flex;
justify-content: center ;
align-items: center;
padding: 13px 133px;
gap: 10px;
margin-top: 15px;

border: solid 2px #FE7E02 ;
border-radius: 27px;

color:#FE7E02;
background:#fff;
`
export const container = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0;
padding: 0;
flex-direction: column;
`

export const input = styled.input`
color:#000;
background: #FFFFFF;
border: solid 1px #252E2C;
border-radius: 4px;
margin-top: 15px;
height: 30px;
width: 300px;

`
export const containerInput = styled.div`
margin-top: 15px;
display: flex;
justify-content: center;
flex-direction: column;
`