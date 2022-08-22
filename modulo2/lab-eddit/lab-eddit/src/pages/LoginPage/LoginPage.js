import React, { useState } from "react";
import ImagemLogo from '../../assets/ImagemLogo.svg'
import *as S from "./Styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UseForm from "../../hooks/UseForm";




const LoginPage = () => {
    const navigate = useNavigate()

    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const logar = (form, navigate, cleanFields) => {

        const body = {
            email: email,
            password: password,

        };

        axios.post("https://labeddit.herokuapp.com/users/login", body)
            .then((response) => {
                setLogin("Deu certo: ", response.data);
                localStorage.setItem("token", response.data.token)
               
            })
            .catch((error) => {
                setLogin("Deu errado: ", error.response);
            });
    
    };


    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const logarConta = ()=>{
        logar()
        navigate("/comentario")
    }

    return (
        <S.container>

            <S.logo>
                <img src={ImagemLogo} />
            </S.logo>

            <S.titulo> LabEddit </S.titulo>

            <S.subTitulo> O Projeto de rede social da Labenu </S.subTitulo>

            <S.containerInput>


                <S.input type="email"
                    placeholder="email"
                    size="2em"
                    required
                    value={email}
                    onChange={onChangeEmail}
                    label={"E-mail"}
                />
                <S.input type="password"
                    placeholder="senha"
                    size="2em"
                    patern={"^.{6,}"}
                    title={"minimo 6 numeros"}
                    required
                    value={password}
                    onChange={onChangePassword}
                    label={"senha"}
                />


            </S.containerInput>

            <S.botaoContinuar onClick={()=>logarConta()}> Continuar </S.botaoContinuar>
            <S.botaoCriarConta onClick={() => navigate("/cadastro")}> Criar Conta </S.botaoCriarConta>




        </S.container>
    )

}

export default LoginPage