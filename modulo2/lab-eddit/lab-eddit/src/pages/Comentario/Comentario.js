import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { AiFillLike, AiOutlineDislike } from 'react-icons/ai';
import *as S from "./Styled";
import axios from "axios";
import UseForm from "../../hooks/UseForm";
// import { publicarPost } from "../../services/request";
import UseRequestData from "../../hooks/UseRequestData";
import { useParams } from "react-router-dom";


const Comentario = () => {
 const [listaComentarios, getData, isLoading] = useState("")
  const [comments, setComments] = useState([]);
  const [novoComentario, setNovoComentario] = useState("");
  const params = useParams();
  const [title, setTitle] = useState("");
 
 const publicarPost =()=>{
    const token = localStorage.getItem("token")
    const auth = {headers:{Authorization:token}}
    
    const body ={
        title:title,
        body:body
    }
    axios.post(`https://labeddit.herokuapp.com/posts/:id/comments`, body, auth)
    .then((response) => {
        setComments("Deu certo: ", response.data);
        localStorage.setItem("token", response.data.token);

      })
      .catch((error) => {
        setComments("Deu errado: ", error.response);
      });
  };


    const renderizarPost =(event)=>{
      event.preventDefault()
       publicarPost(getData, params.id)
   }


  function pegarComentario(event) {
    event.preventDefault()
    setComments([...comments, novoComentario])
    setNovoComentario("")
  }
  console.log();

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
          value={novoComentario}
        />

        <S.Postar onClick={pegarComentario}> Postar </S.Postar>

      </S.formulario>

      {listaComentarios && listaComentarios.map(com => {
        return (
          <S.blocoComentario>

            <S.autor> Enviado por: @ju_santana </S.autor>
            <AiFillLike />
            <AiOutlineDislike />

            <span> {com} </span>
            <AiFillLike />
            <AiOutlineDislike />
          </S.blocoComentario>
        )
      })}


    </S.container>
  )
}

export default Comentario