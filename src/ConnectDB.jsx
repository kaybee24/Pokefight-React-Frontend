
import { useState, useEffect, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonImages, setPokemonImages] = useState([]);

    // useEffect(() => {
    //     const getPokeData = axios.get(import.meta.env.VITE_HEROKU_API)
    //     const getPokeImages = axios.get(import.meta.env.VITE_POKE_API)
    //         .then(axios.spread((...allData) => {
    //             console.log("allData", allData)
    //             setPokemonData(allData[0].data)
    //             setPokemonImages(allData[1].data)
    //         }))
    //         .catch(err => err.message)
    // }, [])


    // useEffect(() => {
    //     Promise.all([
    //         fetch(import.meta.env.VITE_HEROKU_API),
    //         fetch(import.meta.env.VITE_POKE_API),
    //     ])
    //         .then(([res1, res2]) => {
    //             setPokemonData(res1.json())
    //             setPokemonImages(res2.json())
    //         })
    //         .catch(err => {
    //             console.log("Error", err);
    //         });
    // }, []);

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

