import { useState } from 'react'
import { useEffect } from 'react'

import axios from 'axios'

export default function Entry(){
    const [pokemon, setPokemon] = useState(null)
    const [currentId, setCurrentId] = useState(1)
    const [search, setSearch] = useState('')
    const [error, setError] = useState('')

    const handleNext = () => {
        setCurrentId(prevId => prevId + 1)

    }

    const handlePrevious = () => {
      if(currentId === 1){
        return;
      }
        setCurrentId(prevId => prevId - 1)

    }

    const handleSearch = async () => {
      if(!search.trim()) return;
      try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
        if(!response.ok) throw new Error('Pokemon not found');
        const data = await response.json()
        setPokemon(data)
        setCurrentId(data.id)
        setError('');
      } catch(err){
        setError(err.message)
        setPokemon(null)
      }
    



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
    <input 
    className='search-bar'
    type="text"
    value={search}
    onChange={(e) => { setSearch(e.target.value)}}
    placeholder='Search Pokemon' />
    <button className="search-button" onClick={handleSearch}>Search</button>
    {error && <p className="error-message">{error}</p>}

    

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
    <div className="button-row">
    <button className="previous-button" onClick={handlePrevious}>Previous</button>
    <button className='next-button' onClick={handleNext}>Next</button>
    </div>
  </div>
);

 
}