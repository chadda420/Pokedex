
import Entry from './components/Entry'
import './App.css'
import PokeKeyPad from './components/PokeKeypad'
import { useState } from 'react'
import { useEffect } from 'react'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import ToggleButtons from './components/ToggleButtons'
import RegionSelector from './components/RegionSelector'
import RegionList from './components/RegionList'






export default function App(){
  const [pokemon, setPokemon] = useState(null)
    const [currentId, setCurrentId] = useState(1)
    const [search, setSearch] = useState('')
    const [error, setError] = useState('')
    const [regionPokemonList, setRegionPokemonList] = useState([])
    const [regionLoading, setRegionLoading] = useState(false)
    const [regionError, setRegionError] = useState('')
    const [characteristics, setCharacteristics] = useState('')
   

     useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${currentId}`)
          .then(response => {
            setPokemon(response.data);
          })
          .catch(error => {
            console.error('Error fetching Pokémon data:', error);
          });
      }, [currentId]);

      useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${currentId}/`)
        .then(response => {
          const flavorTextEntry = response.data.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
      );
          setCharacteristics(flavorTextEntry?.flavor_text || "No description available")
        })
        .catch((error) => {
            console.error('Error getting pokemon characteristics', error)
            setCharacteristics("Error loading description")
        })
      }, [currentId])

    

return ( 
  <div className='app-layout'>
   <div className='pokedex-container'>
    <RegionSelector
  setRegionPokemonList={setRegionPokemonList}
  setRegionLoading={setRegionLoading}
  setRegionError={setRegionError}
/>
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
  characteristics={characteristics}
  setCharacteristics={setCharacteristics}
 
 
  />
 
  <ToggleButtons
  currentId = {currentId}
  setCurrentId = {setCurrentId} />
  </div>

<RegionList
regionPokemonList={regionPokemonList} 
regionError={regionError}
 regionLoading={regionLoading} 
 setPokemon={setPokemon}
 setCurrentId={setCurrentId} 
 setError={setError}
 setCharacteristics={setCharacteristics}

/>
</div>
)


}



