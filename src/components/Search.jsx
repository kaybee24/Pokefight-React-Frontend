import { AppContext } from "../ConnectDB"
import { useContext, useState } from "react"

export default function Searchbar() {
    const { pokemonFilters, setPokemonFilters } = useContext(AppContext)

    function updateSearch(event) {
        setPokemonFilters(prev => ({ ...prev, search: event.target.value }))
        console.log("pokemonFilters", pokemonFilters)
    }

    return (
        <input onChange={updateSearch} type="text" placeholder="Search for Pokemons" className="bg-transparent outline-none border-b-[2px] text-center" />

    )
}



