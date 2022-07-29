import React from "react";
import styled from "styled-components";
import ImagemLogo from "../assets/ImagemLogo.svg";



export const Header = () => {

    const Container = styled.div`
    display: flex;
     background:#EDEDED;
     width: 100%;
     height: 50px;
     img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;

    };
    a{
        color:#4088CB;
        cursor: pointer;
        justify-content: flex-end;
        align-items:flex-end;
        margin-top: 15px;
        margin-right:10px ;
    }
     `

    return (
        <Container>
            <img src={ImagemLogo} />


            <a> Entrar</a>
        </Container>
    )
}