import { useContext } from 'react';
import { AppContext } from '../ConnectDB.jsx';
import './Hero.css';
import Instructions from './Instructions.jsx';
import PerformanceBars from './PerformanceBars.jsx';



const Hero = () => {
    const { pokemonData, setPokemonData, pokemonImages, setPokemonImages } = useContext(AppContext)


    return (
        <>
            <PerformanceBars />
            <div className='flex justify-center'>
                <button className="bg-sky-600 px-6 py-3 rounded-full cursor-pointer text-white absolute bottom-8 z-20">Choose Pokemon</button>
                <div className='wrestle-area absolute bottom-0 z-10'></div>
            </div>
            <Instructions />
        </>
    )
}

export default Hero
