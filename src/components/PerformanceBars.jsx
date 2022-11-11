import { useContext } from 'react';
import { AppContext } from '../ConnectDB';


const PerformanceBars = () => {
    const { pokemonImages } = useContext(AppContext);
    const pokemonRandom = () => {
        const min = Math.ceil(1)
        const max = Math.floor(800)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    return (
        <>
            {/* {pokemonData.map((e) =>
            (<div key={e.id} className="max-w-xs font-bold bg-slate-300 rounded-full text-sm">
                <div>{e.base.HP}</div>
            </div>)

            )
            } */}
            <div className="absolute bottom-6 mx-8 w-1/5">
                <div className="px-2 my-2 font-bold bg-slate-300 rounded-full text-sm">{pokemonRandom()}</div>
                <div className="px-2 my-2 font-bold bg-slate-300 rounded-full text-sm">{pokemonRandom()}</div>
                <div className="px-2 my-2 font-bold bg-slate-300 rounded-full text-sm">{pokemonRandom()}</div>
                <div className="px-2 my-2 font-bold bg-slate-300 rounded-full text-sm">{pokemonRandom()}</div>
                <div className="px-2 my-2 font-bold bg-slate-300 rounded-full text-sm">{pokemonRandom()}</div>
            </div>
        </>
    )
}

export default PerformanceBars