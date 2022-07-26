import React from "react";
import { Header } from "../../components/Header";
import { AiFillLike, AiOutlineDislike} from 'react-icons/ai';
import *as S from "./Styled";
import styled from "styled-components";

const ResponderComentario= () => {

    return(
        <S.container>
        <Header/>
  
       <S.input placeholder="Adicionar Comentario"/>

       <S.Postar> Responder </S.Postar>
   
   </S.container>
    )
}

export default ResponderComentario