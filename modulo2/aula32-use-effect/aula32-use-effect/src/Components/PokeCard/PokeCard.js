import React, { useEffect, useState } from 'react'
import axios from 'axios'


export const PokeCard = () => {

const [pokemon, setPokemon] = useState()



   const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
  
        pokemon = response.data ;
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(()=>{
      pegaPokemon(pokemon)
return()=>{
    pegaPokemon(pokemon)
}
},[pokemon])

    return (
        <>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
        </>
    )
}