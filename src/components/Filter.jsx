export const filterablePokemonTypes = ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy"]
import { AppContext } from "../ConnectDB"
import { useContext } from "react"
export default function FilterButtons() {

    const { pokemonFilters, setPokemonFilters, setSliderPage, setPokemonDetailsFilter, pokemonDetailsAll } = useContext(AppContext)

    function updateType(newType) {
        setPokemonFilters(prev => ({ ...prev, type: newType }))
    }

    function resetTrigger(e) {
        e.preventDefault()
        setPokemonDetailsFilter(pokemonDetailsAll)
        setSliderPage(0)
    }


    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn">Filter
            </label>
            <ul className="dropdown-content">
                {filterablePokemonTypes.map(type => <li><button key={type} onClick={() => updateType(type)}>{type}</button></li>)}
                <button className="btn btn-sm text-sm" onClick={resetTrigger}>reset</button>
            </ul>
        </div>
    )
}

