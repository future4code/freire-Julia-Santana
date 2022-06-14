import React from 'react'
import styled from 'styled-components'
import './style.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{id:Date.now(), 
                texto:'Organizando Tarefas', 
                completa:false,
                },

                {
                id:Date.now(),
                texto:'Analisando Tarefas',  
                completa:true,
                }],

      inputValue: '',
      filtro: "pendentes"
    };
  }
    const NovaTarefa = {
      tarefasNovas: {
        id:Date.now(), 
                texto:'Organizando Tarefas', 
                completa:false,
                },

                {
                id:Date.now(),
                texto:'Analisando Tarefas',  
                completa:true,
                },

                const OutraTarefa = [
                  NovaTarefa, ... this.state.tarefas2,
                  this.setState({tarefas2:Tarefa})
                 ]
      };
    
      
  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({ Tarefas: event.target.value })
  }

  criaTarefa = () => {

  }

  selectTarefa = (id) => {
 
  
     const tarefaDiferente = this.state.NovaTarefa.map((Tarefa)=> {
      return 
      if(tarefasid === tarefas.id){
        tarefas.false = !tarefas.true
      }
     })

  }

  onChangeFilter = (event) => {

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

