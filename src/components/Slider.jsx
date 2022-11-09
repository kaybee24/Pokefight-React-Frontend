import { useContext, useState } from 'react';
import { Context } from '../ConnectDB';

const Slider = () => {
    const { pokemonData, pokemonImages } = useContext(Context);

    console.log("arrivedData", pokemonImages)
    return (

        <div className="w-full h-80 px-12 mt-10">
            <div className="carousel h-full flex-wrap" width="3000px">
                <div className="carousel-item relative h-10">
                    {pokemonData.map((e) => e.id <= 269 &&
                        (<div key={e.id} className="mx-5">
                            <img src={`${pokemonImages[e.id - 1] && pokemonImages[e.id - 1].sprites.front_default}`} width="100px" />
                        </div>)
                    )}
                </div>
                <div className="carousel-item relative h-10">
                    {pokemonData && pokemonData.map((e) => e.id >= 270 && e.id <= 539 &&
                        (<div key={e.id} className="mx-5">
                            <img src={`${pokemonImages[e.id - 1] && pokemonImages[e.id - 1].sprites.front_default}`} width="100px" />
                        </div>)
                    )}
                </div>
                <div className="carousel-item relative h-10">
                    {pokemonData && pokemonData.map((e) => e.id >= 540 && e.id <= 808 &&
                        (<div key={e.id} className="mx-5">
                            <img src={`${pokemonImages[e.id - 1] && pokemonImages[e.id - 1].sprites.front_default}`} width="100px" />
                        </div>)
                    )}
                </div>

            </div >
            {/* <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-slide-to={position}>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-slide-to={position}>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="sr-only">Next</span>
                </span>
            </button> */}
        </div >
    )
}

export default Slider
