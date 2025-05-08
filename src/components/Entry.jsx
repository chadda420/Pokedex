import { useState } from 'react'
import { useEffect } from 'react'

import axios from 'axios'

export default function Entry(){
    const [pokemon, setPokemon] = useState(null)
    const [currentId, setCurrentId] = useState(1)

    const handleNext = () => {
        setCurrentId(prevId => prevId + 1)

    }

    
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${currentId}`)
          .then(response => {
            setPokemon(response.data);
          })
          .catch(error => {
            console.error('Error fetching Pokémon data:', error);
          });
      }, [currentId]);
   




return (
  <div className='pokedex-container'>
    {pokemon ? (
      <>
        <h3>#: {currentId}</h3>
        <h1 className='pokemon-name'>{pokemon.name.toUpperCase()}</h1>
        <img
            className='pokemon-image'
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
        />
       
      </>
    ) : (
      <p>Loading...</p>
    )}
    <button className='next-button' onClick={handleNext}>Next</button>
  </div>
);

 
}