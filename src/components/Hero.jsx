import { useContext } from 'react';
import { ConnectDB } from '../ConnectDB.jsx';

const Hero = () => {
    const { pokemonData, setPokemonData } = useContext(ConnectDB)
    console.log(pokemonData)
    return (
        <>
        <div>Hello</div>
            {pokemonData}
            
        </>
    )
}

export default Hero