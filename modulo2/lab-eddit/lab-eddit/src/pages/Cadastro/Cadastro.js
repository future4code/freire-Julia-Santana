import React, { useState, useEffect } from "react";
import *as S from "./Styled";
import { Header } from "../../components/Header";
import axios from "axios";
// import { URL_BASE } from "../../constants/Url";


const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [cadastro, setCadastro] = useState("");

  const enviarCadastro = (event) => {

    const body = {
      username: userName,
      email: email,
      password: password,
     
    };

    axios.post("https://labeddit.herokuapp.com/users/signup", body)
    .then((response) => {
      setCadastro("Deu certo: ", response.data);
      localStorage.setItem("token", response.data.token);
       

    })
      .catch((error) => {
      setCadastro("Deu errado: ", error.response);
      });
  };

  const onChangeuserName = (event) => {
    setUserName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <S.container>
      <Header />
      <S.titulo> Olá Boas Vindas ao Labe-Eddit </S.titulo>

      <S.form>

        <S.input placeholder="Nome do Usuario"
          type="text"
          value={userName}
          onChange={onChangeuserName}
          required
          patern={"^.{3,}"}
          title={"O nome de ter no minimo 3 letras"}
        />

        <S.input type="email"
          placeholder="email"
          value={email}
          onChange={onChangeEmail}
          required
        />

        <S.input type="password"
          placeholder="passworld"
          value={password}
          onChange={onChangePassword}
          patern={"^.{8,30}"}
          title={"minimo 8 numeros e maximo 30 numeros"}
          required
        />

      </S.form>

      <p> Ao continuar você concorda com o nosso Contrato de Usuario e nossa Politica de Privacidade</p>
      <div>

        <input type="checkbox" /> Eu concordo em receber emails sobre coisas legais do LabEddit

      </div>
      <S.botaoCadastrar onClick={enviarCadastro}> Cadastrar </S.botaoCadastrar>


    </S.container>
  )
}

export default Cadastro