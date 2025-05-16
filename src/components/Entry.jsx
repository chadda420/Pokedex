
import '../App.css'

export default function Entry({pokemon, currentId, error, }){
    


return (

<div>
    {error && <p className="error-message">{error}</p>}

    

    {pokemon ? (
      <>
        <h3 className='id-number'>#: {currentId}</h3>
        
        <img
            className='pokemon-image'
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
        />
        <h1 className='pokemon-name'>{pokemon.name.toUpperCase()}</h1>
       
      </>
    ) : (
      <p>Loading...</p>
    )}
   
  </div>
);

 
}