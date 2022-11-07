import { useState, useEffect, createContext } from "react";

export const ConnectDB = createContext();
export const ContextProvider = (props) => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_HEROKU_API)
            .then(res => {
                if (res.ok)
                    return res.json()
            }).then(data => {
                setPokemonData(data)
                console.log(data)
            }
            )
            .catch(err => err.message)
    }, []);

    return
    <Context.Provider value={
        {
            pokemonData, setPokemonData
        }
    }>
        {props.children}
    </Context.Provider>

}

export default ContextProvider;
