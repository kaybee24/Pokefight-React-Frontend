import { useContext } from 'react';
import { Context } from '../ConnectDB.jsx';


const Hero = () => {
    const { pokemonData, setPokemonData, pokemonImages, setPokemonImages } = useContext(Context)


    return (
        <div></div>
    )
}

export default Hero
