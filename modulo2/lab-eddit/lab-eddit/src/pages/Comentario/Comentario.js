import React, { useState } from "react";
import { Header } from "../../components/Header";
import { AiFillLike, AiOutlineDislike } from 'react-icons/ai';
import *as S from "./Styled";



const Comentario = () => {

  const [comments, setComments] = useState([""]);
  const [novoComentario, setNovoComentario] = useState("")

  function pegarComentario(event) {
    event.preventDefault()
    setComments([...comments, novoComentario])
    setNovoComentario("")
  }


  const onChangeComentario = (event) => {
   setNovoComentario(event.target.value);
    event.target.setCustomValidity("")

  };
   


  return (
    <S.container>
      <Header />
      <S.formulario onSubmit={pegarComentario}>
        <S.textArea placeholder="Escreva seu Comentario"
          name="comentario"
          onChange={onChangeComentario}
          value={comments}
        />

        <S.Postar onClick={pegarComentario}> Postar </S.Postar>

      </S.formulario>

         {comments.map(com =>{
               return(
                <S.blocoComentario>
                <S.autor> Enviado por: @ju_santana </S.autor>
        
                <S.comentario key={com} content={com}>Qual seu Pet Favorito?</S.comentario>

                <AiFillLike />
                <AiOutlineDislike />
              </S.blocoComentario>
               )
         })}


    </S.container>
  )
}

export default Comentario