import { useState, useEffect } from 'react';
import "./Index.css";
import axios from "axios";

const AdminHomePage = () => {
  const [lista, setLista] = useState("")
  const [deletar, setDeletar] = useState("")

  const listaViagens = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Julia/trips")
      .then(response => {
        alert("response")

        setLista(response.data.trips)
      }).catch(erro => {
        alert(erro)
      })
  }

  useEffect(() => {
    listaViagens()
  }, [])
  const deletarViagens = () => {
    axios.del("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id")
      .then(response => {
        alert("response")

        setDeletar(response.data.id)
      }).catch(erro => {
        alert(erro)
      });
  }
  return (
    <div>
      Lista de Viagem e deletar
      <button onClick={deletarViagens}> Deletar </button>


    </div>
  )
}
export default AdminHomePage