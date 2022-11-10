import { useContext, useState } from 'react';
import { AppContext } from '../ConnectDB';

const Slider = () => {
    const { pokemonData, pokemonImages, pokemonFilters, sliderPage, setSliderPage, pokemonPerSlide } = useContext(AppContext);

    // const pokemonImagesLocal = localstorage.key('pokemon');
    // console.log("Pokemons at localStorage", pokemonImagesLocal)

    // once a person type/search filters, the simple slider concept breaks down 

    // slider file just receives n pokemon and allow user to push prev/next
    console.log("arrivedData", pokemonImages)
    return (

        <div className="w-full h-80 px-12 mt-10">
            <div className="carousel h-full w-full">
                <div className="carousel-item h-10 flex-wrap">
                    {pokemonData
                        // .slice(sliderPage * pokemonPerSlide, pokemonPerSlide)
                        // .filter(pok => pok.type === pokemonFilters.type)
                        // .filter(pok => pok.name.includes(pokemonFilters.search))
                        .map((pok) => (
                            <div key={pok.id} className="mx-5">
                                <img src={`${pokemonImages[pok.id - 1] && pokemonImages[pok.id - 1].sprites.front_default ? pokemonImages[pok.id - 1].sprites.front_default : ""}`} width="100px" />
                            </div>)
                        )}
                </div>

            </div >
            <h1>sliderPage:{sliderPage}</h1>
            <button onClick={() => setSliderPage(sliderPage - 1)} >
                <h2>Previous</h2>
            </button>
            <button onClick={() => setSliderPage(sliderPage + 1)} >
                <h2>Next</h2>
            </button>
        </div >
    )
}

export default Slider
