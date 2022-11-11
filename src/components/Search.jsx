import { AppContext } from "../ConnectDB"
import { useContext, useState } from "react"

export default function Searchbar() {
    const { pokemonFilters, setPokemonFilters } = useContext(AppContext)

    function updateSearch(event) {
        setPokemonFilters(prev => ({ ...prev, search: event.target.value }))
        console.log("pokemonFilters", pokemonFilters)
    }

    return (<div>
        <div className="form-control">
            <input onChange={updateSearch} type="text" placeholder="Search for Pokemons" className="input input-bordered" />
        </div>
    </div>)
}



