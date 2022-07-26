import React,{useState} from "react";
import *as S from "./Styled";
import { Header } from "../../components/Header";
import axios from "axios";
// import { URL_BASE } from "../../constants/Url";


const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [userName, setUserName] = useState("");
    
    const enviarCadastro = ()=>{
        const body = {
           email:email,
           password:password,
           userName:userName
        }
        axios.post("https://labeddit.herokuapp.com/users/signup").then((response) => {
            console.log("Deu certo: ", response);
            localStorage.setItem("token", response.data.token);
   
        
          })
          .catch((error) => {
            console.log("Deu errado: ", error.response);
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
            <Header/>
            <S.titulo> Olá Boas Vindas ao Labe-Eddit </S.titulo>

            <S.containerInput>

                <S.input placeholder="Nome do Usuario"
                type="text"
                value={userName}
                onChange={onChangeuserName}
                 />

                <S.input type="email" 
                placeholder="email"
                value={email}
                onChange={onChangeEmail}
                />

                <S.input type="password" 
                placeholder="passworld" 
                value={password}
                onChange={onChangePassword}

                />

            </S.containerInput>

            <p> Ao continuar você concorda com o nosso Contrato de Usuario e nossa Politica de Privacidade</p>
            <div>

                <input type="checkbox" /> Eu concordo em receber emails sobre coisas legais do LabEddit

            </div>
            <S.botaoCadastrar onClick={console.log(enviarCadastro)}> Cadastrar </S.botaoCadastrar>

        </S.container>
    )
}

export default Cadastro