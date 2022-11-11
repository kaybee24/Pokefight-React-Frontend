import { useContext } from 'react';
import { AppContext } from '../ConnectDB.jsx';
import './Hero.css';
import ButtonRumble from './ButtonRumble.jsx';
import ButtonInstructions from './ButtonInstructions.jsx';
import PerformanceUserPoke from './PerformanceUserPoke.jsx';


const Hero = () => {
    const { pokemonData, setPokemonData, pokemonImages, setPokemonImages } = useContext(AppContext)
    const pokemonRandom = () => {
        const min = Math.ceil(1)
        const max = Math.floor(800)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    return (
        <>
            <div className='grid grid-cols-3 absolute bottom-0'>
                <div className="ml-6 mt-20">
                    <PerformanceUserPoke />
                </div>
                <div className='flex justify-center'>
                    <div className='wrestle-area'></div>
                    <div className="grid gap-2 absolute bottom-8">
                        <ButtonRumble />
                        <ButtonInstructions />
                    </div>
                    <div className="flex gap-10 absolute bottom-48">
                        <div id="pokeUser" className="rounded-full bg-slate-300 border-white border-8 p-14">{pokemonRandom()}</div>
                        <div id="pokeRival" className="rounded-full bg-slate-300 border-white border-8 p-14"><button>{pokemonRandom()}</button></div>
                    </div>
                </div>
                <div className="absolute right-6 mt-20">
                    <PerformanceUserPoke />
                </div>
            </div>
        </>
    )
}

export default Hero

