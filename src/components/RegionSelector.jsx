import { useState, useEffect } from "react"
import axios from "axios"


export default function RegionSelector({ setRegionPokemonList, setRegionLoading, setRegionError }){
     const [regions, setRegions] = useState([])

    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/region/')
        .then(response => {
            setRegions(response.data.results)
        })
        .catch(err => {
        console.error('Failed to fetch regions', err)
      })
    },[regions])

      const handleRegionChange = async (e) => {
    const url = e.target.value
    setRegionLoading(true)
    setRegionError('')
    setRegionPokemonList([])

     try {
      const regionResponse = await axios.get(url)
      const pokedexUrl = regionResponse.data.pokedexes[0].url
      const pokedexResponse = await axios.get(pokedexUrl)
      setRegionPokemonList(pokedexResponse.data.pokemon_entries)
    } catch (err) {
      console.error(err)
      setRegionError('Failed to load Pokémon for selected region.')
    } finally {
      setRegionLoading(false)
    }
  }


    return(
         <div>
      <select onChange={handleRegionChange} defaultValue="">
        <option value="" disabled>Select a region</option>
        {regions.map(region => (
          <option key={region.name} value={region.url}>
            {region.name.charAt(0).toUpperCase() + region.name.slice(1)}
          </option>
        ))}
      </select>
    </div>

    )
}