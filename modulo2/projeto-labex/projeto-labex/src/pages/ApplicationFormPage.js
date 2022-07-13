import { useState, useEffect } from 'react';
import "./Index.css";
import { useNavigate } from 'react-router-dom';
import { voltar } from '../Routes/Cordinaton';
import { Cordination } from '../Routes/Cordinaton';
import axios from "axios";

const CreateTripPage = () => {

    const [candidato, setCandidato] = useState("")

    const seEscrever = () => {

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id/apply")
            .then(response => {
                alert("response")

                setCandidato(response.data.apply)
            }).catch(erro => {
                alert(erro)
            })
    }

    useEffect(() => {
        seEscrever()
    }, [])

    const navigate = useNavigate()
    return (
        <div>
            <h1> Candidatar a Viagem </h1>
            <select>
                <option> </option>
            </select>

            <input placeholder="nome"> </input>

            <input placeholder="idade"> </input>

            <input placeholder="Texto de Candidatura"> </input>

            <input placeholder="Profissão"> </input>

            <select>
                <option></option>
            </select>

            <button onClick={() => voltar(navigate)}> voltar </button>
            <button> enviar </button>


        </div>
    )
}

export default CreateTripPage