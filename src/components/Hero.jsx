import { useContext } from 'react';
import { ConnectDB } from '../ConnectDB.jsx';

const Hero = () => {
    const { pokemonData, setPokemonData } = useContext(ConnectDB)
    return (
        <>
            <div>Hello</div>

        </>
    )
}

export default Hero