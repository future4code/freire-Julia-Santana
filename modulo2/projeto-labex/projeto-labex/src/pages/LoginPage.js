import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TripDetailPage from "./TripDetailsPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const LoginPage = () => {

    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    };

    const onSubmitLogin = () => {
        console.log(email, password);

        const body = {
            email: email,
            password: password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Julia/login", body)
            .then(response => {
                // alert("response.data")
                console.log("deu certo", response.data.tokem);
                localStorage.setItem('tokem')
                navigate.push('/listaViagens')
                // setLogin(response.data.login)
            }).catch(error => {
                // alert(erro.response)
                console.log(" deu errado", error.response);
            })
    }

    useEffect(() => {
        onSubmitLogin()
    }, [])
    return (
        <div>
            <h1> Login com o adiministrador </h1>

            <input type="email"
                placeholder="email"
                value={email}
                onChange={onChangeEmail}
            />

            <input type="password"
                placeholder="password"
                value={password}
                onChange={onChangePassword}
            />
            <button onClick={onSubmitLogin}> enviar </button>
        </div>
    )
}

export default LoginPage