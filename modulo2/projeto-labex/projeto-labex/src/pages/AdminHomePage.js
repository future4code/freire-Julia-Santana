import { useState, useEffect } from 'react';
import "./Index.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { voltar, criarViagem } from '../Routes/Cordinaton';

const AdminHomePage = () => {

  const protecaoPagina = () => {

    const tokem = localStorage.getItem('token')
    const navigate = useNavigate()

    if (tokem === null) {
      console.log("não esta logado");
      navigate('/administrativo')
    }
  }

  const [lista, setLista] = useState("")
  const [deletar, setDeletar] = useState("")

  const listaViagens = () => {
    axios.get("https://us-centruseHistoryal1-labenu-apis.cloudfunctions.net/labeX/Julia/trips")
      .then(response => {
        alert("response")

        setLista(response.data.trips)
      }).catch(erro => {
        alert(erro)
      })
  }

  const deletarViagens = () => {
    axios.del("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id")
      .then(response => {
        alert("response")

        setDeletar(response.data.id)
      }).catch(erro => {
        alert(erro)
      });
  }

  useEffect(() => {
    listaViagens()
    protecaoPagina()
  }, [])


  return (
    <div>
      Lista de Viagem e deletar
      <button onClick={deletarViagens}> Deletar </button>
      <button onClick={() => voltar(navigate)}> voltar </button>
      <button onClick={() => criarViagem(navigate)}> Criar Viagem </button>


    </div>
  )
}
export default AdminHomePage