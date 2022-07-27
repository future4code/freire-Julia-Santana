import { Header } from "../../components/Header";
import { AiFillLike, AiOutlineDislike} from 'react-icons/ai';
import *as S from "./Styled";
import styled from "styled-components";
import React, { useState } from "react";

const ResponderComentario= () => {

    const [resposta, setResposta] = useState("");


  function enviarResposta (event) {
    event.preventDefault()

  }

  const onChangeResposta = (event) => {
    setResposta(event.target.value);
  };

    return(
        <S.container onSubmit={resposta}>
        <Header/>
  
       <S.input placeholder="Adicionar Resposta"
       name="resposta"
       onChange={onChangeResposta}
       value={resposta}
       />

       <S.Postar> Responder </S.Postar>
   
   </S.container>
    )
}

export default ResponderComentario
