
import Entry from './components/Entry'
import './App.css'
import PokeKeyPad from './components/PokeKeypad'
import { useState } from 'react'
import { useEffect } from 'react'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import ToggleButtons from './components/ToggleButtons'







export default function App(){
  const [pokemon, setPokemon] = useState(null)
    const [currentId, setCurrentId] = useState(1)
    const [search, setSearch] = useState('')
    const [error, setError] = useState('')

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
    <SearchBar 
  pokemon = {pokemon} 
  setPokemon = {setPokemon}
  search = {search}
  setSearch = {setSearch}
  error = {error}
  setError = {setError}
   setCurrentId={setCurrentId}
  />
  <Entry
  pokemon = {pokemon} 
  currentId={currentId}
  error = {error}
 
 
  />
 
  <ToggleButtons
  currentId = {currentId}
  setCurrentId = {setCurrentId} />
  <PokeKeyPad/>

  </div>
)


}



