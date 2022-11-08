import { useContext } from 'react';
import { Context } from '../ConnectDB.jsx';

const Hero = () => {
    const { pokemonData, setPokemonData } = useContext(Context)
    console.log(pokemonData)
    return (
        <>
            <div>Hello</div>

        </>
    )
}

export default Hero
