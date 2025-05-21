
import '../App.css'

export default function Entry({pokemon, currentId, error, characteristics
 }){
    


return (
<div className="entry-layout">
<div className='entry-info'>
    {error && <p className="error-message">{error}</p>}
    {pokemon ? (
      <>
        <h3 className='id-number'>#: {currentId}</h3>
        
        <img
            className='pokemon-image'
          src={ pokemon?.sprites?.other?.['official-artwork']?.front_default ||
    pokemon?.sprites?.front_default }
          alt={pokemon.name}
        />
        <h1 className='pokemon-name'>{pokemon.name.toUpperCase()}</h1>
       
      </>
    ) : (
      <p>Loading...</p>
    )}
   
  </div>
  <div className="pokemon-description">
    {pokemon ? (
      <h2 className="pokemon-type">Type: {pokemon.types[0].type.name.charAt(0).toUpperCase()}{pokemon.types[0].type.name.slice(1)} 
    </h2> ) : (
    <p>Loading...</p>
   
  )}
  {characteristics ? (
  <h3 className="pokemon-description">
    Description: {characteristics}
  </h3>
) : (
  <h3>No characteristic description available.</h3>
)}
  </div>
  </div>
);

 
}