
import { useState, useEffect, createContext } from "react";

export const AppContext = createContext();

export const ContextProvider = (props) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonImages, setPokemonImages] = useState([]);
    const [pokemonFilters, setPokemonFilters] = useState({
        type: "none",
        search: ""
    });
    const [backgroundImage, setBackgroundImage] = useState([]);

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
                    data.results.forEach(async (e) => {
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

    useEffect(() => {
        console.log({pokemonData,
            pokemonImages,
            pokemonFilters,
            backgroundImage})
    }, [pokemonData,
        pokemonImages,
        pokemonFilters,
        backgroundImage]);

    return (
        <AppContext.Provider value={
            {
                pokemonFilters,
                setPokemonFilters,
                backgroundImage,
                setBackgroundImage,
                pokemonData, setPokemonData,
                pokemonImages, setPokemonImages
            }
        }>
            {props.children}
        </AppContext.Provider>
    )

}

export default ContextProvider;

