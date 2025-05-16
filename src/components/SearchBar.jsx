    export default function SearchBar({ setPokemon,setCurrentId, search, setSearch, setError}){
    
    const handleSearch = async () => {
      if(!search.trim()) return;
      try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
        if(!response.ok) throw new Error('Pokemon not found');
        const data = await response.json()
        setPokemon(data)
        setCurrentId(data.id)
        setError('');
        setSearch('')
      } catch(err){
        setError(err.message)
        setPokemon(null)
      }

      
        
    }
    const handleKeyDown = (e) => {
      if(e.key === 'Enter')
        handleSearch();
}

return (
 <div className='search-area'>
    <div className='input-with-icon'>
      <button  className='search-button' onClick={handleSearch}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
<path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
</svg></button>
    <input 
    className='search-bar'
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onKeyDown={handleKeyDown}
    placeholder='Search Pokemon' />
    
    </div>
</div>

)}