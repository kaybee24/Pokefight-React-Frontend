import { useContext } from 'react';
import { Context } from '../ConnectDB.jsx';
import './Hero.css';
//import Instructions from './Instructions.jsx';
import PerformanceBars from './PerformanceBars.jsx';
import ButtonRumble from './ButtonRumble.jsx';
import Instructions from './Instructions.jsx';

const Hero = () => {
    const { pokemonData, setPokemonData, pokemonImages, setPokemonImages } = useContext(Context)


    return (
        <>
            <PerformanceBars />
            <div className='flex justify-center'>
                <div className="grid gap-2 absolute bottom-8 z-20">
                    <ButtonRumble />
                    <Instructions />
                </div>
                <div className="flex gap-10 absolute bottom-48">
                    <div id="pokeUser" className="rounded-full bg-slate-300 border-white border-8 p-14"></div>
                    <div id="pokeRival" className="rounded-full bg-slate-300 border-white border-8 p-14"></div>
                </div>
                <div className='wrestle-area absolute bottom-0 z-10'></div>
            </div>
            {/* <Instructions /> */}
        </>
    )
}

export default Hero
