import { useState, useEffect } from 'react';
import "./Index.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { voltar } from '../Routes/Cordinaton';

const TripDetailPage = () => {

    const protecaoPagina = () => {

        const tokem = localStorage.getItem('token')
        const navigate = useNavigate()

        if (tokem === null) {
            console.log("não esta logado");
            navigate('/administrativo')
        }
    }

    const [detalhe, setDetalhe] = useState("")

    useEffect(() => {
        protecaoPagina()

        const tokem = localStorage.getItem('token')

        const detalheViagem = () => {
            axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/:id", {
                headers: { auth: '' }
            }).then(response => {
                alert("response")


                setDetalhe(response.data.id)
            }).catch(erro => {
                alert(erro)
            })
        }
    }, [])
    return (
        <div>
            <h1> detalhe da viagem</h1>
            <button onClick={() => voltar(navigate)}> voltar </button>
        </div>
    )
}

export default TripDetailPage