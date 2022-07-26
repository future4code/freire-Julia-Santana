import React from "react";
import ImagemLogo from '../../assets/ImagemLogo.svg'
import *as S from "./Styled";
import { useNavigate } from "react-router-dom";



const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <S.container>

            <S.logo>
                <img src={ImagemLogo} />
            </S.logo>

            <S.titulo> LabEddit </S.titulo>

            <S.subTitulo> O Projeto de rede social da Labenu </S.subTitulo>

            <S.containerInput>

                
                    <S.input type="text" placeholder="login" size="2em" />
                    <S.input type="password" placeholder="senha" size="2em" />
         

            </S.containerInput>

            <S.botaoContinuar onClick={()=>navigate("/comentario")}> Continuar </S.botaoContinuar>
            <S.botaoCriarConta onClick={()=>navigate("/cadastro")}> Criar Conta </S.botaoCriarConta>




        </S.container>
    )
}

export default LoginPage