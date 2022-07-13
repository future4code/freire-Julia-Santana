import { useState, useEffect } from 'react'
import "./Index.css";
import { voltar } from '../Routes/Cordinaton';
import { useNavigate } from 'react-router-dom';
import { Cordination } from '../Routes/Cordinaton';
import axios from "axios";

const CreateTripPage = () => {

    const [criar, setCriar] = useState("")
    const criarViagem = () => {
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Julia/trips")
            .then(response => {
                alert("response")

                setCriar(response.data.trips)
            }).catch(erro => {
                alert(erro)
            })
    }

    useEffect(() => {
        criarViagem()
    }, [])
    const navigate = useNavigate()
    return (
        <div>
            <h1> Criar Nova Viagem </h1>
            <input placeholder="nome"> </input>

            <input ></input>

            <input placeholder="Descrição"> </input>

            <input placeholder="Duração em Dias"> </input>



            <button onClick={() => voltar(navigate)}> Voltar </button>
            <button> Criar </button>
        </div>
    )
}

export default CreateTripPage