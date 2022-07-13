import { useNavigate } from "react-router-dom"
import { voltar, seEscrever } from '../Routes/Cordinaton'
import { Routes } from 'react-router-dom';
import { Cordination } from '../Routes/Cordinaton'
import axios from "axios";
import { useEffect, useState } from "react";
import { urlViagens } from "../Constantes/url";


const ListTripsPage = (url) => {
    const [lista, setLista] = useState("")

    const viagens = () => {

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Julia/trips")
            .then(response => {
                alert("response")

                setLista(response.data.trips)
            }).catch(erro => {
                alert(erro)
            })
    }
    useEffect(() => {
        viagens()
    }, [])
    const navigate = useNavigate()
    return (
        <div>
            <h1> Lista de Viagems</h1>
            <button onClick={() => voltar(navigate)}> voltar </button>
            <button onClick={() => seEscrever(navigate)}> Escrever-se </button>
        </div>
    )
}

export default ListTripsPage