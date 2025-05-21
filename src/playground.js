import axios from "axios";
 
axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
    .then(response => {
        console.log(response.data)
    })
    .catch((error) => {
        console.error('Couldnt fetch', error)

    })

  