import { useContext } from 'react';
import { ConnectDB } from '../ConnectDB.jsx';

const Hero = () => {
    const { pokemonData, setPokemonData } = useContext(ConnectDB)
    return (
        <>

            {pokemonData}
        </>
    )
}

export default Hero