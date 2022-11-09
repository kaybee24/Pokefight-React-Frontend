
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
            .then(async (data) => {
                try {
                    const pokemons = data.results.map(async (e) => {
                        const pokemon = await fetch(e.url)
                            .then(res => res.json())
                            .then(res => setPokemonImages(pokeData => [...pokeData, res]));
                    })
                }
                catch { err => console.log(err) }
            })
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

