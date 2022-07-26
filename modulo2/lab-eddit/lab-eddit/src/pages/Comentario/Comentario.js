import React from "react";
import { Header } from "../../components/Header";
import { AiFillLike, AiOutlineDislike} from 'react-icons/ai';
import *as S from "./Styled";
import styled from "styled-components";



const Comentario = () => {

    return(
        <S.container>
             <Header/>
       
            <S.input placeholder="Escreva seu Comentario"/>

            <S.Postar> Postar </S.Postar>

             <S.blocoComentario>
                <S.autor> Enviado por: @ju_santana </S.autor>
                
                <S.comentario>Qual seu Pet Favorito?</S.comentario> 
                <AiFillLike/> 
                <AiOutlineDislike/>
                </S.blocoComentario>
        
        </S.container>
    )
}

export default Comentario