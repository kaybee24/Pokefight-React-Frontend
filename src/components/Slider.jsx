import { useContext, useState } from 'react';
import { Context } from '../ConnectDB';


const Slider = () => {
    const { pokemonData, pokemonImages } = useContext(Context);
    return (
        <div className="carousel w-full">
            <>
                {pokemonData.map((e) => pokemonData.name && pokemonData.name
                    (<div id="slide1" className="carousel-item relative w-full" >
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>)

                )
                }
            </>
        </div >
    )
}

export default Slider
