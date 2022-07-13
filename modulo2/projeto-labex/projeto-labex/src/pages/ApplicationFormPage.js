import { useState, useEffect } from 'react';
import "./Index.css";
import { useNavigate } from 'react-router-dom';
import { voltar } from '../Routes/Cordinaton';
import { Cordination } from '../Routes/Cordinaton';
import axios from "axios";

const CreateTripPage = () => {

    const [candidato, setCandidato] = useState("")
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [text, setText] = useState("")


    const onChangeName = (event) => {
        setName(event.target.value)
    };

    const onChangeNumber = (event) => {
        setNumber(event.target.value)
    }

    const onChangeTexto = (event) => {
        setText(event.target.value)
    }

    const seEscrever = () => {

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id/apply")
            .then(response => {
                alert("enviado com sucesso")

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

            <input placeholder="nome"
                type="name"
                value={name}
                onChange={onChangeName}

            />

            <input placeholder="idade"
                type="number"
                value={number}
                onChange={onChangeNumber} />

            <input placeholder="Texto de Candidatura"
                type="text"
                value={text}
                onChange={onChangeTexto}
            />

            <input placeholder="Profissão"
                type="text"
                value={text}
                onChange={onChangeTexto} />

            <select>
                <option></option>
            </select>

            <button onClick={() => voltar(navigate)}> voltar </button>
            <button onClick={seEscrever}> enviar </button>


        </div>
    )
}

export default CreateTripPage