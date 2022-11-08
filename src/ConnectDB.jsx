import { useState, useEffect, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonImages, setPokemonImages] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_HEROKU_API)
            .then(res => res.json())
            .then((res) => {
                setPokemonData(res)
            })
            .catch(err => {
                console.log("Error", err);
            });
        fetch(import.meta.env.VITE_POKE_API)
            .then(res => res.json())
            .then(res => setPokemonImages(res.results))
            .catch(err => {
                console.log("Error", err);
            });
    }, []);
    return (
        <Context.Provider value={
            {
                pokemonData, setPokemonData,
                pokemonImages, setPokemonImages
            }
        }>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider;
