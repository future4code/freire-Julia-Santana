import { Header } from "../../components/Header";
import *as S from "./Styled";
import styled from "styled-components";
import React, { useState } from "react";

const ResponderComentario = () => {

  const [response, setResponse] = useState([]);

  const [newResponse, setNewResponse] = useState("")

  function pegarResposta(event) {
    event.preventDefault()
    setResponse([...response, newResponse])
    setNewResponse("")
  }


  const onChangeResposta = (event) => {
    setNewResponse(event.target.value);
    event.target.setCustomValidity("")

  };



  return (
    <S.container>
      <Header />
      <S.formulario onSubmit={pegarResposta}>
        <S.textArea placeholder="Escreva sua Resposta"
          name="resposta"
          onChange={onChangeResposta}
          value={newResponse}
        />

        <S.Postar onClick={pegarResposta}> Postar </S.Postar>

      </S.formulario>

      {response.map(res => {
        return (
          <S.blocoResposta>

            <span> {res} </span>

          </S.blocoResposta>
        )
      })}


    </S.container>
  )
}


export default ResponderComentario
