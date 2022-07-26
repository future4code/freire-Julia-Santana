import styled from "styled-components";


export const Postar = styled.button`
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

export const input = styled.input`
background: #EDEDED;
border-radius: 12px;
width: 200px;
height: 100px;
margin-top: 30px;
`
export const container = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0;
padding: 0;
flex-direction: column;
`
export const autor = styled.p`
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
text-align: center;
color: #6F6F6F;

`

export const comentario = styled.p `
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
color: #000000;

`
export const blocoComentario = styled.div `
border: solid 2px #656569;
border-radius: 12px;
width: 300px;
height: 200px;
margin-top: 30px;
`