import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {

     const[administar, setAdministar]=  useState("")
    const loginAdm = () => {
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Julia/login")
            .then(response => {
                alert("response")

                setAdministar(response.data.login)
            }).catch(erro => {
                alert(erro)
            })
    }

    useEffect(() => {
        loginAdm()
    }, [])
    return (
        <div>
            <h1> Login com o adiministrador </h1>

            <input placeholder="email" />

            <input placeholder="senha" />
        </div>
    )
}

export default LoginPage