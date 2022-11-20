import { useContext, useState } from 'react';
import { AppContext } from '../ConnectDB';
import './PerformanceBars.css'

const PerformanceBars = ({ done }) => {
    const { pokemonData, pokemonDetailsAll } = useContext(AppContext);
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    return (
        <div className="progress text-sm my-3 bg-slate-300 rounded-full w-[18rem] h-[1.25rem] relative">
            <div className="progress-done bg-orange-500 rounded-full" style={style}>
                {done}%
            </div>
        </div>
    )
}

export default PerformanceBars
