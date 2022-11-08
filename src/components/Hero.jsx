import { useContext } from 'react';
import { Context } from '../ConnectDB.jsx';


const Hero = () => {
    const { pokemonData, setPokemonData, pokemonImages, setPokemonImages } = useContext(Context)

    console.log("receivedImages", pokemonImages)
    console.log("receivedData", pokemonData)

    return (
        <>
            <div>Hello</div>

        </>
    )
}

export default Hero
