import React from 'react';
import axios from "axios";

export default class Api extends React.Component {
    render(){
        return(
    <div>
<h3> Procurar Usuario </h3>
          <input
            value={this.state.lista}
            onChange={this.onChangeLista}
            placeholder="nome exato para busca"
          />
          <button onClick={this.createUser3}> Salvar edição </button>
          </div>
 );
};
}