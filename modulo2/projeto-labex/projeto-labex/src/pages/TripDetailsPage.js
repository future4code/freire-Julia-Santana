import { useState, useEffect } from 'react';
import "./Index.css";
import axios from "axios";

const TripDetailPage = () => {

    const [detalhe, setDetalhe] = useState("")

    const detalheViagem = () => {
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/:id")
            .then(response => {
                alert("response")

                setDetalhe(response.data.id)
            }).catch(erro => {
                alert(erro)
            })
    }
    useEffect(() => {
        detalheViagem()
    }, [])
    return (
        <div>
            <h1> detalhe da viagem</h1>
        </div>
    )
}

export default TripDetailPage