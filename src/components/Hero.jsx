import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../ConnectDB.jsx';
import './Hero.css';
import ButtonRumble from './ButtonRumble.jsx';
import ButtonInstructions from './ButtonInstructions.jsx';
import PerformanceUserPoke from './PerformanceUserPoke.jsx';


const Hero = () => {
    const { pokemonDetailsAll, pokemonSliderSelection, setLoading } = useContext(AppContext)
    const [randomPokemon, setRandomPokemon] = useState()
    // const min = Math.ceil(1)
    // const max = Math.floor(800)
    // const randomCalc = Math.floor(Math.random() * (max - min + 1)) + min;

    // useEffect(() => {
    //     setLoading(true)
    //     const min = Math.ceil(1)
    //     const max = Math.floor(800)
    //     const randomCalc = Math.floor(Math.random() * (max - min + 1)) + min;
    //     setRandomPokemon(pokemonDetailsAll[randomCalc])
    //     setLoading(false)
    // }, [pokemonSliderSelection])

    console.log("randomPokemon", randomPokemon)
    // console.log("POKIOKIKO", randomCalc)

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
                        <div id="pokeUser" className="rounded-full bg-slate-300 border-white border-8 p-4"><img className="w-24 text-center" src="" /></div>
                        <div id="pokeRival" className="rounded-full bg-slate-300 border-white border-8 p-4"><img className="w-24 text-center" src="" /></div>
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

