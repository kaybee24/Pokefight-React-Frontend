
import React from 'react'
import FilterButtons from "./Filter"

        
export const searchPokemonTypes = [""]
import { AppContext } from "../ConnectDB"
import { useContext } from "react"
export default function Searchbar() {
    const { pokemonSearch, setPokemonSearch } = useContext(AppContext)
    function updateType(newType) {
        setPokemonSearch(prev => ({ ...prev, type: newType }))
    }
    return (<div>
        {searchPokemonTypes.map(type => <button key={type} onClick={() => updateType(type)}>{type}</button>)}
    </div>)
}
    


