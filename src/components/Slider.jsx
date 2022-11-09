import { useContext, useState } from 'react';
import { AppContext } from '../ConnectDB';

const Slider = () => {
    const { pokemonData, pokemonImages, pokemonFilters } = useContext(AppContext);

    console.log("arrivedData", pokemonImages)
    return (

        <div className="w-full h-64 px-12 mt-10">
            <div className="carousel h-full flex-wrap" width="3000px">
                <div className="carousel-item relative h-10">
                    {pokemonData
                        .filter(pok => pok.type === pokemonFilters.type)
                        .filter(pok => pok.name.includes(pokemonFilters.search))
                        .map((e) => e.id <= 202 &&
                        (<div key={e.id} className="mx-5">
                            <img src={`${pokemonImages[e.id - 1] && pokemonImages[e.id - 1].sprites.front_default}`} width="50px" />
                        </div>)
                    )}
                </div>
                <div className="carousel-item relative h-10">
                    {pokemonData && pokemonData.map((e) => e.id >= 203 && e.id <= 404 &&
                        (<div key={e.id} className="mx-5">
                            <img src={`${pokemonImages[e.id - 1] && pokemonImages[e.id - 1].sprites.front_default}`} width="50px" />
                        </div>)
                    )}
                </div>
                <div className="carousel-item relative h-10">
                    {pokemonData && pokemonData.map((e) => e.id >= 405 && e.id <= 606 &&
                        (<div key={e.id} className="mx-5">
                            <img src={`${pokemonImages[e.id - 1] && pokemonImages[e.id - 1].sprites.front_default}`} width="50px" />
                        </div>)
                    )}
                </div>
                <div className="carousel-item relative h-10">
                    {pokemonData && pokemonData.map((e) => e.id >= 607 && e.id <= 808 &&
                        (<div key={e.id} className="mx-5">
                            <img src={`${pokemonImages[e.id - 1] && pokemonImages[e.id - 1].sprites.front_default}`} width="50px" />
                        </div>)
                    )}
                </div>
            </div >
        </div >
    )
}

export default Slider
