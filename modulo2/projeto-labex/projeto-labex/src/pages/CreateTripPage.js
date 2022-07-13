import { useState, useEffect } from 'react'
import "./Index.css";
import { voltar, criarViagem } from '../Routes/Cordinaton';
import { useNavigate } from 'react-router-dom';
import { Cordination } from '../Routes/Cordinaton';
import axios from "axios";

const CreateTripPage = () => {

    const protecaoPagina = () => {

        const tokem = localStorage.getItem('token')
        const navigate = useNavigate()

        if (tokem === null) {
            console.log("não esta logado");
            navigate('/administrativo')
        }
    }

    const [criar, setCriar] = useState("")
    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [data, setData] = useState("")
    const [number, setNumber] = useState("")

    const onChangeName = (event) => {
        setName(event.target.value)
    };

    const onChangeDescription = (event) => {
        setDescricao(event.target.value)
    };
    const onChangeData = (event) => {
        setData(event.target.value)
    };

    const onChangeNumber = (event) => {
        setNumber(event.target.value)
    }

    const criarViagem = () => {
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Julia/trips")
            .then(response => {
                alert("Viagem adicionada com sucesso")

                setCriar(response.data.trips)
            }).catch(erro => {
                alert(erro)
            })
    }

    useEffect(() => {
        criarViagem()
        protecaoPagina()

    }, [])
    const navigate = useNavigate()
    return (
        <div>
            <form>
                <label>
                    <h1> Criar Nova Viagem </h1>
                    <input placeholder="name"
                        type="text"
                        value={name}
                        onChange={onChangeName}
                    />

                    <input
                        placeholder="Prazo de Serviço"
                        type="date"
                        value={data}
                        onChange={onChangeData}
                    />
                    <input placeholder="text"
                        type="text"
                        value={text}
                        onChange={onChangeDescription} />

                    <input placeholder="Duração em Dias"
                        type="number"
                        value={number}
                        onChange={onChangeNumber}
                    />
                </label>
            </form>


            <button onClick={() => voltar(navigate)}> Voltar </button>
            <button onClick={() => criarViagem(navigate)}> Criar </button>
            <button> logout</button>
        </div>
    )
}

export default CreateTripPage