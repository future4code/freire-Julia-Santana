import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`
export default class Api extends React.Component {
  state = {
    usuarios: [],
  };

  componentDidMount() {
    this.pegarUsuario();
  }

  pegarUsuario = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, {
        headers: {
          Authorization: "Julia-Moreira-Freire",
        },
      })

      .then((resposta) => {
        this.setState({ usuarios: resposta.data });
      })

      .catch((erro) => {
        alert("Ocorreu um problema tente novamente");
      });
  };



  deletarUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "Julia-Moreira-Freire",
        },
      })

      .then((resposta) => {
        alert("usuario(a) deletado(a) com sucesso");
        this.pegarUsuario();
      })

      .catch((erro) => {
        alert("ocorreu um erro, tente novamente");
      });
  };

  render() {

    const listaUsuario = this.state.usuarios.map((user) => {
      return (
        < CardUsuario key={user.id}>
          {user.name}
          <button onClick={() => this.deletarUsuario(user.id)}>
            {" "}
            deletar{" "}
          </button>
        </CardUsuario>
      );
    });

    return (
      <div>
        <h3> Lista de Usuario </h3>
        {listaUsuario}

       
        <button onClick={this.props.mudarTela}> Ir para cadastro </button>
      </div>
    );
  }
}
