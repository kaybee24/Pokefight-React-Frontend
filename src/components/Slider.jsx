import { useContext, useState } from 'react';
import { AppContext } from '../ConnectDB';
import './Slider.css'

const Slider = () => {

    const { pokemonData, pokemonImages, pokemonImageSelection, setPokemonImageSelection, pokemonFilters, sliderPage, setSliderPage, pokemonPerSlide } = useContext(AppContext);


    // const pokemonImagesLocal = localstorage.key('pokemon');
    // console.log("Pokemons at localStorage", pokemonImagesLocal)

    // once a person type/search filters, the simple slider concept breaks down 

    // slider file just receives n pokemon and allow user to push prev/next
    console.log("arrivedData", pokemonImages)
    return (
        <div className='h-[24rem] overflow-hidden'>
            <div className="px-32 pt-10 mx-auto w-full flex flex-wrap justify-center">

                {pokemonData
                    // .slice(sliderPage * pokemonPerSlide, pokemonPerSlide)
                    // .filter(pok => pok.type === pokemonFilters.type)
                    // .filter(pok => pok.name.includes(pokemonFilters.search))
                    .map((pok) => (pokemonImageSelection[pok.id - 1] &&
                        <div key={pok.id} className="m-5 pokemonGalleryItem rounded-full">
                            <img src={`${pokemonImageSelection[pok.id - 1].sprites.front_default}`} width="130px" />
                        </div>)
                    )}
                <div className="absolute flex justify-between left-16 right-16 top-[14rem]">
                    <button className="btn btn-circle btn-outline p-12" onClick={() => setSliderPage(sliderPage - 1)} >
                        ❮
                    </button>
                    <button className="btn btn-circle btn-outline p-12" onClick={() => setSliderPage(sliderPage + 1)} >
                        ❯
                    </button>
                </div>
            </div >
        </div>
    )
}

export default Slider
