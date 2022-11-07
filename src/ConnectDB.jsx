import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ConnectDB = createContext();
export const ContextProvider = (props) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonImages, setPokemonImages] = useState([]);

    useEffect(() => {
        const getPokeData = axios.get(import.meta.env.VITE_HEROKU_API)
        const getPokeImages = axios.get(import.meta.env.VITE_POKE_API)
            .then(axios.spread((...allData) => {
                setPokemonData(allData[0].data)
                setPokemonImages(allData[1].data)
            }))
            .catch(err => err.message)
    }, []);

    return
    <Context.Provider value={
        {
            pokemonData, setPokemonData,
            pokemonImages, setPokemonImages
        }
    }>
        {props.children}
    </Context.Provider>

}

export default ContextProvider;
