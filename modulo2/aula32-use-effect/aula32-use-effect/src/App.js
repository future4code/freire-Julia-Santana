import React, { useEffect, useState } from 'react'
import './App.css';
import { PokeCard } from './Components/PokeCard/PokeCard';
import axios from 'axios'

function App() {

const [pokeList, setPokeList] = useState([])
const [pokeName, setPokeName] = useState ("")

const changePokeName = event => {
  pokeName =  event.target.value ;
};

useEffect = (() => {
 
  axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
     
      pokeList =  response.data.results ;
    })
    .catch(err => {
      console.log(err);
    });
}, []);





  return (
    <div className="App">

      <div className="App">
     
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
       
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
     
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
      
    </div>
  );
}

export default App;
