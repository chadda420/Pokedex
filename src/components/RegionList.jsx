import axios from "axios"
import '../App.css'

export default function RegionList({regionPokemonList, regionError, regionLoading, setPokemon,setCurrentId, setError,}){

    return (
    <div className="region-list-container">
    {regionError && <p>{regionError}</p>}
    {regionLoading ? (
      <p>Loading region Pokémon...</p>
    ) : (
      <ul className="region-listed-group">
  {regionPokemonList.map((entry) => (
    
    <li
        className="region-listed-pokemon"
      key={entry.entry_number}
      onClick={async () => {
        try {
          
          const name = entry.pokemon_species.name
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
          setPokemon(res.data)
          setCurrentId(res.data.id)
          setError('')
         
          
        } catch (err) {
          console.error(err)
          setError('Failed to load Pokémon')
        }
      }}
      style={{ cursor: 'pointer' }}
    >
      {entry.pokemon_species.name.charAt(0).toUpperCase() + entry.pokemon_species.name.slice(1)}
    </li>
  ))}
</ul>
    )}
  </div>
    )

}